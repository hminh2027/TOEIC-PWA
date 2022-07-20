import { PrismaClient, Role } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();

  console.log('Seeding...');

  const user1 = await prisma.user.create({
    data: {
      email: 'admin@gmail.com',
      username: 'admin',
      password: '123',
      avatar: '',
      role: Role.ADMIN,
    },
  });
  const user2 = await prisma.user.create({
    data: {
      email: 'user@gmail.com',
      username: 'user',
      password: '123',
      avatar: '',
      role: Role.USER,
    },
  });

  console.log({ user1, user2 });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
