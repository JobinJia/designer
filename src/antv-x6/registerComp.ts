const WIDGET_PREFIX = `Widget-`
const widgets: Record<string, any> = import.meta.glob(['./widgets/**/*.vue', './widgets/**/*.tsx'], { eager: true })

const widgetMap = Object.values(widgets).reduce((map, widget) => {
  const type = widget.default.widgetType
  map[`${WIDGET_PREFIX}${type}`] = widget.default
  return map
}, {} as { [k: string]: any })

export default widgetMap
