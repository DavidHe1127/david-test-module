// semantic release config
module.exports = {
  branches: [
    'master',
    { name: 'prerelease/*', channel: 'prerelease', prerelease: 'prerelease' },
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    '@semantic-release/github',
    '@semantic-release/git',
  ],
  ci: false,
};
