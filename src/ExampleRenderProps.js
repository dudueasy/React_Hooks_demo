import React from 'react';

export class ExampleRenderProps extends React.Component {
  state = {content: ' RenderProps Example'};

  render() {
    const exampleStyle = {
      exampleBlock: {
        border: '1px solid grey',
      },
    };

    return (
      <div>
        This is ExampleRenderProps component

        <div style={exampleStyle.exampleBlock}>
          <p>这个元素是由 this.props.render 渲染出来的</p>
          {
            this.props.render(this.state.content)
          }
        </div>
      </div>);
  }
}