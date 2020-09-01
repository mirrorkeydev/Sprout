import { shallowMount } from '@vue/test-utils';
import SectionHeader from '@/components/SectionHeader.vue';

describe('SectionHeader.vue', () => {
  it('render prop as the section header', () => {
    const text = 'section header text';
    const wrapper = shallowMount(SectionHeader, {
      propsData: { text },
      stubs: ['router-link', 'router-view'],
    });
    expect(wrapper.text()).toMatch(text);
  });
});
