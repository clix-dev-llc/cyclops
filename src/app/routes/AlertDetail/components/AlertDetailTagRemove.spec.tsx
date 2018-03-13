/**
 * The contents of this file are subject to the CYPHON Proprietary Non-
 * Commercial Registered User Use License Agreement (the "Agreement”). You
 * may not use this file except in compliance with the Agreement, a copy
 * of which may be found at https://github.com/dunbarcyber/cyclops/. The
 * developer of the CYPHON technology and platform is Dunbar Security
 * Systems, Inc.
 *
 * The CYPHON technology or platform are distributed under the Agreement on
 * an “AS IS” basis, WITHOUT WARRANTY OF ANY KIND, either express or
 * implied. See the Agreement for specific terms.
 *
 * Copyright (C) 2017 Dunbar Security Solutions, Inc. All Rights Reserved.
 *
 * Contributor/Change Made By: ________________. [Only apply if changes
 * are made]
 */

// Vendor
import * as React from 'react';
import * as enzyme from 'enzyme';
import { spy } from 'sinon';

// Local
import { AlertDetailTagRemove, Props, State } from './AlertDetailTagRemove';
import { Tag } from '~/services/tags/types';

describe('<AlertDetailTagRemove />', () => {
  const tag: Tag = {
    id: 1,
    name: 'Crackers',
    topic: {
      id: 1,
      name: 'Animal',
      url: '',
    },
  };
  const onRemove = spy();
  const onCancel = spy();
  const defaults: Props = { tag, onRemove, onCancel };
  const render = (props?: Partial<Props>) => enzyme.shallow((
    <AlertDetailTagRemove {...defaults} {...props} />
  ));

  it('should call the onRemove property when the removal is confirmed', () => {
    const component = render();
    const button = component.find('Button').first();

    button.simulate('click');
    expect(onRemove.args[0]).toEqual([tag]);
  });

  it('should call the onCancel property when the removal is denied', () => {
    const component = render();
    const button = component.find('Button[bsStyle="danger"]');

    button.simulate('click');
    expect(onCancel.callCount).toEqual(1);
  });
});