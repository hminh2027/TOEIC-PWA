import { hashPassword } from '../src/common/utils/hash';
import { PrismaClient, Role } from '@prisma/client';
import { usersList } from './data/users';
import { sourcesList } from './data/sources';
import { testsList } from './data/tests';

const prisma = new PrismaClient();

async function main() {
  const password = hashPassword('123456');

  const sourceIds: string[] = [];
  const testIds: string[] = [];

  await prisma.user.create({
    data: {
      email: 'admin@gmail.com',
      username: 'admin',
      password,
      avatar: '',
      role: Role.ADMIN,
    },
  });

  for (const user of usersList) {
    await prisma.user.create({ data: user });
  }

  for (const source of sourcesList) {
    const createdSource = await prisma.testSource.create({ data: source });
    sourceIds.push(createdSource.id);
  }

  for (const test of testsList) {
    test.testSourceId = sourceIds[Math.floor(Math.random() * sourceIds.length)];
    const createdTest = await prisma.test.create({ data: test });
    testIds.push(createdTest.id);
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
