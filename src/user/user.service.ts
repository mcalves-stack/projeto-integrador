import { Injectable, NotFoundException } from '@nestjs/common'
import { UpdateUserDto } from './dto/update-user.dto'
import { PrismaService } from 'src/prisma/prisma.service'

interface User {
  password: string
}

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    try {
      const users = await this.prisma.user.findMany()
      return users.map((user) => this.excludePassword(user))
    } catch (error) {
      throw new Error('Failed to retrieve users')
    }
  }

  async findOne(id: string) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { id },
      })

      if (!user) {
        throw new NotFoundException(`User with ID ${id} not found`)
      }

      return this.excludePassword(user)
    } catch (error) {
      return `Failed to retrieve user with ID ${id}`
    }
  }

  async update(id: string, dto: UpdateUserDto) {
    try {
      const updateUser = await this.prisma.user.update({
        where: { id },
        data: { ...dto },
      })

      return this.excludePassword(updateUser)
    } catch (error) {
      return `Failed to update user with ID ${id}`
    }
  }

  async remove(id: string) {
    try {
      await this.prisma.user.delete({
        where: { id },
      })

      return { message: 'User deleted successfully' }
    } catch (error) {
      return `Failed to delete user with ID ${id}`
    }
  }

  private excludePassword(user: User) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userWithoutPassword } = user
    return userWithoutPassword
  }
}
