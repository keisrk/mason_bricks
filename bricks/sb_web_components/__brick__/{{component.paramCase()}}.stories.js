import './{{component.paramCase()}}.js'

export default {
  title: '{{component.pascalCase()}}'
}

const Template = (args) => '<{{component.paramCase()}}></{{component.paramCase()}}>'

export const Default = Template.bind({})
