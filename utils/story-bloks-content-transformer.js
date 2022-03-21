export const storyBlocksContentTransformers = (content) => {
    if (!Array.isArray(content)) return {};
    const data = {};
    content.forEach(value => {
        let contentKey = "";
        Object.keys(value).forEach(key => {
            if (key === "component") {
                contentKey = value[key].replace(/ /g, "");
            }
        })
        if (contentKey && data[contentKey]) data[contentKey + "_1"] = Object.assign({}, value);
        else if (contentKey) data[contentKey] = Object.assign({}, value);
    })

    return data;
}