import { createConfig } from '@gluestack-ui/themed';
import { config as defaultConfig } from '@gluestack-ui/config';
import { FontResolver } from '@gluestack-style/react';

const config = createConfig({
    ...defaultConfig,
    tokens: {
        ...defaultConfig.tokens,
        fonts: {
            heading: 'Assistant',
            body: 'Assistant',
            mono: undefined,
          },      
        fontSizes: {
            ...defaultConfig.tokens.fontSizes,
            newFontSize: 90,
        },
    },
    // plugins: [
    //     ...defaultConfig.plugins,
    //     new FontResolver()
    //   ],    
});

export { config };
