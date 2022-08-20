import { CreateTestInput } from '../../src/modules/tests/dto/create-test.input';
import { TestCategory, TestSkill } from '@prisma/client';

export const testsList: CreateTestInput[] = [
  {
    title: 'Test 1',
    score: 450,
    duration: 15,
    image: 'DungLoGiDauBaby',
    audio: '',
    numberOfQuestions: 5,
    answer: 'ABCDA',
    testCategory: TestCategory.PART1,
    testSkill: TestSkill.LISTENING,
    testSourceId: '',
  },
  {
    title: 'Test 2',
    score: 450,
    duration: 20,
    image: 'DungLoGiDauBaby',
    audio: '',
    numberOfQuestions: 5,
    answer: 'ABCDA',
    testCategory: TestCategory.PART2,
    testSkill: TestSkill.READING,
    testSourceId: '',
  },
];
