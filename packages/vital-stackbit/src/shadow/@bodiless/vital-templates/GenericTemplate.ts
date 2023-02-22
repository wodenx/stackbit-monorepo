/**
 * Copyright © 2022 Johnson & Johnson
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { useNode } from '@bodiless/core';
import { flowIf, replaceWith, Fragment } from '@bodiless/fclasses';
import { useLanguageContext } from '@bodiless/i18n';
import { vitalGenericTemplateBase, asGenericTemplateToken } from '@bodiless/vital-templates';

const isHomePage = () => (
  useNode().node.pagePath === '/'
  || useNode().node.pagePath === `/${useLanguageContext().getCurrentLanguage().name}/`
);

const WithNoBreadcrumbsOnHomePage = asGenericTemplateToken({
  Flow: flowIf(isHomePage),
  Components: {
    BreadcrumbWrapper: replaceWith(Fragment),
    Breadcrumb: replaceWith(Fragment),
  },
});

const Default = asGenericTemplateToken(vitalGenericTemplateBase.Base, {
  Compose: {
    WithNoBreadcrumbsOnHomePage,
  }
});

export default {
  ...vitalGenericTemplateBase,
  Default,
};
