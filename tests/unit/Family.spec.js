import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Family from '@/components/Family.vue';

const GREY = '#ccc';
const GREEN = '#b6f0b5';
const YELLOW = '#f8e09f';
const RED = '#f8ab9f';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Family.vue', () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        family: [
          {
            given_name: "peter",
            icon: "pointy",
            green_threshold: 220,
            yellow_threshold: 200,
          },
          {
            given_name: "veronica",
            icon: "round",
            green_threshold: 250,
            yellow_threshold: 205,
          },
          {
            given_name: "marcel",
            icon: "pointy",
            green_threshold: 300,
            yellow_threshold: 250,
          },
        ],
        chart_data: {
          soil_moisture: {
            peter: [[new Date(1000), 230], [new Date(2000), 210]],
            veronica: [[new Date(1000), 230], [new Date(2000), 200]],
            marcel: [[new Date(1000), 350], [new Date(2000), 380]],
          },
          temperature: [[new Date(1000), 30], [new Date(2000), 35]],
          pressure: [[new Date(1000), 1000], [new Date(2000), 1005]],
          light: [[new Date(1000), 760], [new Date(2000), 765]],
        },
      },
    });
  });

  it('displays the correct number of plants', () => {
    const wrapper = shallowMount(Family, { store, localVue });
    expect(wrapper.findAll('div.plant')).toHaveLength(3);
  });

  it('displays the appropriate plant icon (pointy)', () => {
    const wrapper = shallowMount(Family, { store, localVue });
    expect(wrapper.findAll('div.plant').at(0).html()).toContain('pointy');
  });

  it('displays the appropriate plant icon (round)', () => {
    const wrapper = shallowMount(Family, { store, localVue });
    expect(wrapper.findAll('div.plant').at(1).html()).toContain('round');
  });

  it('displays the correct color for well-watered plants (green)', () => {
    const wrapper = shallowMount(Family, { store, localVue });
    expect(wrapper.findAll('div.plant').at(2).html()).toContain(GREEN);
  });

  it('displays the correct color for ok-watered plants (yellow)', () => {
    const wrapper = shallowMount(Family, { store, localVue });
    expect(wrapper.findAll('div.plant').at(0).html()).toContain(YELLOW);
  });

  it('displays the correct color for bad-watered plants (red)', () => {
    const wrapper = shallowMount(Family, { store, localVue });
    expect(wrapper.findAll('div.plant').at(1).html()).toContain(RED);
  });

  it('displays the correct color for with no connection (grey)', () => {
    store.state.chart_data.soil_moisture = new Object();

    const wrapper = shallowMount(Family, { store, localVue });
    expect(wrapper.findAll('div.plant').at(0).html()).toContain(GREY);
  });
});