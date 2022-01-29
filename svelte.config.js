import defaultConfig from '@openc-bv/design-system/sveltekit/config';
import deepmerge from 'deepmerge';

const config = deepmerge(defaultConfig, {
	// Your own custom configuration can go here...
});

export default config;
