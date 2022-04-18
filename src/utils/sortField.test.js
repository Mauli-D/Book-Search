import { handleSorting } from './sortField'

test('sorting should works as expected with sort field title', () => {
  const spy = jest.fn();
  const mock = {
    sortField: 'title',
    sortOrder: 'asc',
    setMatches: spy,
    matches: [{ title: "test title", cover_i: 2424, author_name: ['Hugo'], publish_date: ["September 1999"] }, { title: "hello title", cover_i: 42324, author_name: ['Boss'], publish_date: ["1878"] }]
  }

  handleSorting({ ...mock, sortField: undefined });
  expect(spy).toHaveBeenCalledTimes(0);
  handleSorting(mock);
  expect(spy).toHaveBeenCalledWith([{ "author_name": ["Boss"], "cover_i": 42324, "publish_date": ["1878"], "title": "hello title" }, { "author_name": ["Hugo"], "cover_i": 2424, "publish_date": ["September 1999"], "title": "test title" }]);
})

test('sorting should works as expected with sort field publish date', () => {
  const spy = jest.fn();
  const mock = {
    sortField: 'publish_date',
    sortOrder: 'asc',
    setMatches: spy,
    matches: [{ title: "test title", cover_i: 2424, author_name: ['Hugo'], publish_date: ["September 1999"] }, { title: "hello title", cover_i: 42324, author_name: ['Boss'], publish_date: ["1878"] }]
  }

  handleSorting(mock);
  expect(spy).toHaveBeenCalledWith([{ "author_name": ["Boss"], "cover_i": 42324, "publish_date": ["1878"], "title": "hello title" }, { "author_name": ["Hugo"], "cover_i": 2424, "publish_date": ["September 1999"], "title": "test title" }]);
})

test('sorting should works as expected with sort field in decscending orderfor title', () => {
  const spy = jest.fn();
  const mock = {
    sortField: 'title',
    sortOrder: 'desc',
    setMatches: spy,
    matches: [{ title: "test title", cover_i: 2424, author_name: ['Hugo'], publish_date: ["September 1999"] }, { title: "hello title", cover_i: 42324, author_name: ['Boss'], publish_date: ["1878"] }]
  }

  handleSorting(mock);
  expect(spy).toHaveBeenCalledWith([{ "author_name": ["Hugo"], "cover_i": 2424, "publish_date": ["September 1999"], "title": "test title" }, { "author_name": ["Boss"], "cover_i": 42324, "publish_date": ["1878"], "title": "hello title" }]);
})
