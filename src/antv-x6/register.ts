export const WIDGET_PREFIX = `Widget-`
const widgets: Record<string, any> = import.meta.glob(['./widgets/**/*.vue', './widgets/**/*.tsx'], { eager: true })

export const widgetMap = Object.values(widgets).reduce((map, widget) => {
  const type = widget.default.widgetType
  map[`${WIDGET_PREFIX}${type}`] = widget.default as any
  return map
}, {} as { [k: string]: any })

const settings = import.meta.glob('./widgets/**/settings.ts', { eager: true })

export const settingMap: Record<string, any> = Object.values(settings).reduce((map, module) => {
  const ClassName = module.default
  map[`${WIDGET_PREFIX}${ClassName.widgetType}`] = new ClassName()
  return map
}, {})
console.log(settingMap)
