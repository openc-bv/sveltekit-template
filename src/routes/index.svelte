<script lang="ts">
	import Prose from '@openc-bv/design-system/components/prose.svelte';
	import Button from '@openc-bv/design-system/components/button.svelte';
</script>

<Prose title="Hello" author="Socrates" readingTime={5} date={new Date()}>
	<Button label="Go to page 2" href="/page" />
</Prose>
