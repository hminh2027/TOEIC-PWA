export enum PostOrderField {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  published = 'published',
  title = 'title',
  content = 'content',
}

// registerEnumType(PostOrderField, {
//   name: 'PostOrderField',
//   description: 'Properties by which post connections can be ordered.',
// });

export class PostOrder {
  field: PostOrderField;
}
