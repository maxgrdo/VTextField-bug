import { mount, VueWrapper } from '@vue/test-utils';
import { describe } from 'vitest';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import TextFieldsComponent from '../TextFieldsComponent.vue';

describe('TextFieldsComponent', () => {
  const vuetify = createVuetify({ components, directives });
  let wrapper: VueWrapper;

  it('should works with field without label', () => {
    wrapper = mount<VueWrapper>(TextFieldsComponent as any, {
      global: {
        plugins: [vuetify],
      },
    });

    expect(findInputValue('field-without-label')).toBeFalsy();

    findInput('field-without-label').setValue('Test');

    expect(findInputValue('field-without-label')).toBe('Test');
  });

  it('should works with field with label and default value', () => {
    wrapper = mount<VueWrapper>(TextFieldsComponent as any, {
      global: {
        plugins: [vuetify],
      },
    });

    expect(findInputValue('field-with-label-and-default-value')).toBe('value');

    findInput('field-with-label-and-default-value').setValue('Test');

    expect(findInputValue('field-with-label-and-default-value')).toBe('Test');
  });

  it('should bug with field with label and no value', () => {
    wrapper = mount<VueWrapper>(TextFieldsComponent as any, {
      global: {
        plugins: [vuetify],
      },
    });

    expect(findInputValue('field-with-label')).toBeFalsy();

    findInput('field-with-label').setValue('Test');

    expect(findInputValue('field-with-label')).toBe('Test');
  });

  const findInput = (selector: string) => findBySelector(selector).get('input');
  const findInputValue = (selector: string) =>
    findBySelector(selector).get('input').element.value;

  const findBySelector = (selector: string) =>
    wrapper.find(`[data-selector="${selector}"]`);
});
