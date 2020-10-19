module.exports = `import React from 'react';
import {any, bool, string} from 'prop-types';

import styles from './TemplateName.scoped.css';

const TemplateName = ({ children }) => (
  <div className=TemplateName data-testid="TemplateName">
    TemplateName Component
  </div>
);

TemplateName.propTypes = {
  children: any,
};

TemplateName.defaultProps = {};

export default TemplateName;
`;
