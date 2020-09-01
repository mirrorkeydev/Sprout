import { shallowMount } from '@vue/test-utils';
import HeadingTitle from '@/components/HeadingTitle.vue';

describe('HeadingTitle.vue', () => {
  it('render prop as the title', () => {
    const msg = 'some title';
    const wrapper = shallowMount(HeadingTitle, {
      propsData: { msg },
      stubs: ['router-link', 'router-view'],
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
