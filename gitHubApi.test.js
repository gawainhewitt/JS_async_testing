const GitHubApi = require('./gitHubApi');

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ description: 'Ruby on Rails' }),
  })
);

describe('GitHubApi Class', () => {
  it('calls fetch and loads repo info', async () => {
    const api = new GitHubApi;
    let result;
    const setTest = await api.getRepoInfo('rails/rails', (data) => {
      console.log(data);
      result = data;
    });
    expect(result.description).toBe('Ruby on Rails');
  })
})
