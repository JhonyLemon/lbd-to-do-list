import { ToDoListFilterPipe } from './to-do-list-filter.pipe';

describe('ToDoListFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new ToDoListFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
