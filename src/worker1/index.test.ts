import type {UnstableDevWorker} from 'wrangler';
import {unstable_dev} from 'wrangler';
import {afterAll, beforeAll, describe, expect, it} from 'vitest';

describe('Worker', () => {
	let worker: UnstableDevWorker;

	beforeAll(async () => {
		worker = await unstable_dev('src/index.js', {
			experimental: {disableExperimentalWarning: true},
		});
	});

	afterAll(async () => {
		await worker.stop();
	});

	it('should return Hello World', async () => {
		const resp = await worker.fetch();
		if (resp) {
			const text = await resp.text();
			expect(text).toMatchInlineSnapshot('"Not found"');
		}
	});
});
