/// <reference path="../../js/jquery.d.ts" />
/// <reference path="../../js/extensions.d.ts" />
import BootStrapper = require("../../bootstrapper");
import baseProvider = require("../../modules/uv-shared-module/baseProvider");
import utils = require("../../utils");
import IMediaElementProvider = require("./iMediaElementProvider");

export class Provider extends baseProvider.BaseProvider implements IMediaElementProvider{

    constructor(bootstrapper: BootStrapper) {
        super(bootstrapper);

        this.config.options = $.extend(true, this.options, {
            // override or extend BaseProvider options.
            // these are in turn overridden by the root options object in this extension's config.js.
        }, bootstrapper.config.options);
    }

    getEmbedScript(width: number, height: number, embedTemplate: string): string{

        var esu = this.options.embedScriptUri || this.embedScriptUri;

        var template = this.options.embedTemplate || embedTemplate;

        var configUri = this.config.uri || '';

        var script = String.prototype.format(template, this.manifestUri, this.sequenceIndex, configUri, width, height, esu);

        return script;
    }

    getPosterImageUri(): string{
        // todo: decide how to include poster image in ixif
        return "";
        //var baseUri = this.options.mediaBaseUri || "";
        //var template = this.options.mediaUriTemplate;
        //var uri = String.prototype.format(template, baseUri, this.sequence.extensions.posterImage);
        //
        //return uri;
    }
}
