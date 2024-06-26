// SPDX-FileCopyrightText: 2023 XWiki CryptPad Team <contact@cryptpad.org> and contributors
//
// SPDX-License-Identifier: AGPL-3.0-or-later

define(function () {
    return [
        "3024-day 3024-day.css",
        "3024-night 3024-night.css",
        "abcdef abcdef.css",
        "ambiance-mobile ambiance-mobile.css",
        "ambiance ambiance.css",
        "ansuz ansuz.css",
        "base16-dark base16-dark.css",
        "base16-light base16-light.css",
        "bespin bespin.css",
        "blackboard blackboard.css",
        "cobalt cobalt.css",
        "colorforth colorforth.css",
        "cryptpad-dark cryptpad-dark.css",
        "default default",
        "dracula dracula.css",
        "eclipse eclipse.css",
        "elegant elegant.css",
        "erlang-dark erlang-dark.css",
        "hopscotch hopscotch.css",
        "icecoder icecoder.css",
        "isotope isotope.css",
        "lesser-dark lesser-dark.css",
        "liquibyte liquibyte.css",
        "LOL lol.css",
        "material material.css",
        "mbo mbo.css",
        "mdn-like mdn-like.css",
        "midnight midnight.css",
        "monokai monokai.css",
        "neat neat.css",
        "neo neo.css",
        "night night.css",
        "paraiso-dark paraiso-dark.css",
        "paraiso-light paraiso-light.css",
        "pastel-on-dark pastel-on-dark.css",
        "railscasts railscasts.css",
        "rubyblue rubyblue.css",
        "seti seti.css",
        "solarized solarized.css",
        "the-matrix the-matrix.css",
        "tomorrow-night-bright tomorrow-night-bright.css",
        "tomorrow-night-eighties tomorrow-night-eighties.css",
        "ttcn ttcn.css",
        "twilight twilight.css",
        "vibrant-ink vibrant-ink.css",
        "xq-dark xq-dark.css",
        "xq-light xq-light.css",
        "yeti yeti.css",
        "zenburn zenburn.css"
    ].map(function (line) {
        var kv = line.split(/\s/);
        return {
            name: kv[0].replace(/_/g, ' '),
            theme: kv[1],
        };
    });
});
