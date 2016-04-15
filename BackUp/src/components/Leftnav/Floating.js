import React from 'react';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';

const style = {
    marginRight: 20,
};

const Floating = () => (
    <div>
        <FloatingActionButton mini={true} style={style}>
            <ContentAdd />
        </FloatingActionButton>
    </div>
);

export default Floating;