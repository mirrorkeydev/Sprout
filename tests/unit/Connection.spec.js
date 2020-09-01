import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Connection from '@/components/Connection.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Connection.vue', () => {

  it('displays a connected icon when the Vuex store is connected', () => {
    const store = new Vuex.Store({
      state: {
        connection_status: 'connected',
      },
    });

    const wrapper = shallowMount(Connection, { store, localVue });
    expect(wrapper.html()).toContain('connected');
  });

  it('displays a connecting icon when the Vuex store is connecting', () => {
    const store = new Vuex.Store({
      state: {
        connection_status: 'connecting',
      },
    });

    const wrapper = shallowMount(Connection, { store, localVue });
    expect(wrapper.html()).toContain('connecting');
  });

  it('displays a failure icon when the Vuex store failed to connect', () => {
    const store = new Vuex.Store({
      state: {
        connection_status: 'connecting_failed',
      },
    });

    const wrapper = shallowMount(Connection, { store, localVue });
    expect(wrapper.html()).toContain('failed');
  });
});