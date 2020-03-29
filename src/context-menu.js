
export function CustomContextMenu (editor) {
    editor.use(ContextMenuPlugin, {
        vueComponent: {
                template: `<div class="context-menu"
                ref="menu" 
                v-if="visible"
                v-bind:style="style"
                @mouseleave="timeoutHide()" @mouseover="cancelHide()" @contextmenu.prevent="">
                <Item v-for="item in filtered" :key="item.title" :item="item" :args="args" :delay="delay / 2"></Item>
                </div>`,
                extends: { ...ContextMenuPlugin.Menu, _scopeId: null, render: null },
                components: {
                    Item: {
                        name: 'Item',
                        template: `<div class="item"
                            @click="onClick($event)"
                            @mouseover="showSubitems()"
                            @mouseleave="timeoutHide()"
                            :class="{ hasSubitems }"
                            > {{item.title}}
                            <div class="subitems" v-show="hasSubitems && this.visibleSubitems">
                                <Item v-for="subitem in item.subitems"
                                :key="subitem.title"
                                :item="subitem"
                                :args="args"
                                :delay="delay"
                                ></Item>
                            </div>
                        </div>`,
                        extends: { ...ContextMenuPlugin.Item, _scopeId: null,  render: null }
                    }
                }
            }
    });
}