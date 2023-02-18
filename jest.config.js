const nextJest = require('next/jest')

const createJestConfig = nextJest({
	dir: './',
})

/** @type {import('jest').Config} */
const customJestConfig = {
	moduleDirectories: ['node_modules', '<rootDir>/'],
	testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
	collectCoverageFrom: [
		'**/*.{js,jsx,ts,tsx}',
		'!**/*.d.ts',
		'!**/node_modules/**',
	],
	moduleNameMapper: {
		'^@/components/(.*)$': '<rootDir>/components/$1',
		'^@/store/(.*)$': '<rootDir>/store/$1',
		'^@/styles/(.*)$': '<rootDir>/styles/$1',
		'^@/pages/(.*)$': '<rootDir>/pages/$1'
	},
	testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)