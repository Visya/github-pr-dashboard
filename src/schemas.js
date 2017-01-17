import { schema } from 'normalizr';

export const user = new schema.Entity('users');
export const repo = new schema.Entity('repos', { owner: user });
export const commit = new schema.Entity('commits', { user, repo }, { idAttribute: 'sha' });
export const pr = new schema.Entity('prs', {
  user,
  head: commit,
  base: commit,
  merged_by: user,
}, { idAttribute: 'number' });
export const prList = new schema.Array(pr);
