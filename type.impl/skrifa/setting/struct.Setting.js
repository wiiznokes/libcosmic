(function() {
    var type_impls = Object.fromEntries([["skrifa",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Setting%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/skrifa/setting.rs.html#21\">source</a><a href=\"#impl-Clone-for-Setting%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"skrifa/setting/struct.Setting.html\" title=\"struct skrifa::setting::Setting\">Setting</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/skrifa/setting.rs.html#21\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"skrifa/setting/struct.Setting.html\" title=\"struct skrifa::setting::Setting\">Setting</a>&lt;T&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.82.0/src/core/clone.rs.html#174\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","skrifa::setting::VariationSetting"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Setting%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/skrifa/setting.rs.html#21\">source</a><a href=\"#impl-Debug-for-Setting%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"skrifa/setting/struct.Setting.html\" title=\"struct skrifa::setting::Setting\">Setting</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/skrifa/setting.rs.html#21\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","skrifa::setting::VariationSetting"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3C%26(%26str,+T)%3E-for-Setting%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/skrifa/setting.rs.html#72-79\">source</a><a href=\"#impl-From%3C%26(%26str,+T)%3E-for-Setting%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;(&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.str.html\">str</a>, T)&gt; for <a class=\"struct\" href=\"skrifa/setting/struct.Setting.html\" title=\"struct skrifa::setting::Setting\">Setting</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/skrifa/setting.rs.html#73-78\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(s: &amp;(&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.str.html\">str</a>, T)) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<&(&str, T)>","skrifa::setting::VariationSetting"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3C%26(Tag,+T)%3E-for-Setting%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/skrifa/setting.rs.html#54-61\">source</a><a href=\"#impl-From%3C%26(Tag,+T)%3E-for-Setting%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;(<a class=\"struct\" href=\"skrifa/struct.Tag.html\" title=\"struct skrifa::Tag\">Tag</a>, T)&gt; for <a class=\"struct\" href=\"skrifa/setting/struct.Setting.html\" title=\"struct skrifa::setting::Setting\">Setting</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/skrifa/setting.rs.html#55-60\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(s: &amp;(<a class=\"struct\" href=\"skrifa/struct.Tag.html\" title=\"struct skrifa::Tag\">Tag</a>, T)) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<&(Tag, T)>","skrifa::setting::VariationSetting"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3C%26Setting%3CT%3E%3E-for-Setting%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/skrifa/setting.rs.html#39-43\">source</a><a href=\"#impl-From%3C%26Setting%3CT%3E%3E-for-Setting%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"struct\" href=\"skrifa/setting/struct.Setting.html\" title=\"struct skrifa::setting::Setting\">Setting</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"skrifa/setting/struct.Setting.html\" title=\"struct skrifa::setting::Setting\">Setting</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/skrifa/setting.rs.html#40-42\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(value: &amp;<a class=\"struct\" href=\"skrifa/setting/struct.Setting.html\" title=\"struct skrifa::setting::Setting\">Setting</a>&lt;T&gt;) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<&Setting<T>>","skrifa::setting::VariationSetting"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3C(%26str,+T)%3E-for-Setting%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/skrifa/setting.rs.html#63-70\">source</a><a href=\"#impl-From%3C(%26str,+T)%3E-for-Setting%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;(&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.str.html\">str</a>, T)&gt; for <a class=\"struct\" href=\"skrifa/setting/struct.Setting.html\" title=\"struct skrifa::setting::Setting\">Setting</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/skrifa/setting.rs.html#64-69\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(s: (&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.str.html\">str</a>, T)) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<(&str, T)>","skrifa::setting::VariationSetting"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3C(Tag,+T)%3E-for-Setting%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/skrifa/setting.rs.html#45-52\">source</a><a href=\"#impl-From%3C(Tag,+T)%3E-for-Setting%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;(<a class=\"struct\" href=\"skrifa/struct.Tag.html\" title=\"struct skrifa::Tag\">Tag</a>, T)&gt; for <a class=\"struct\" href=\"skrifa/setting/struct.Setting.html\" title=\"struct skrifa::setting::Setting\">Setting</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/skrifa/setting.rs.html#46-51\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(s: (<a class=\"struct\" href=\"skrifa/struct.Tag.html\" title=\"struct skrifa::Tag\">Tag</a>, T)) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<(Tag, T)>","skrifa::setting::VariationSetting"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Ord-for-Setting%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/skrifa/setting.rs.html#21\">source</a><a href=\"#impl-Ord-for-Setting%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"skrifa/setting/struct.Setting.html\" title=\"struct skrifa::setting::Setting\">Setting</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.cmp\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/skrifa/setting.rs.html#21\">source</a><a href=\"#method.cmp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.Ord.html#tymethod.cmp\" class=\"fn\">cmp</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"skrifa/setting/struct.Setting.html\" title=\"struct skrifa::setting::Setting\">Setting</a>&lt;T&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/cmp/enum.Ordering.html\" title=\"enum core::cmp::Ordering\">Ordering</a></h4></section></summary><div class='docblock'>This method returns an <a href=\"https://doc.rust-lang.org/1.82.0/core/cmp/enum.Ordering.html\" title=\"enum core::cmp::Ordering\"><code>Ordering</code></a> between <code>self</code> and <code>other</code>. <a href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.Ord.html#tymethod.cmp\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.max\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.21.0\">1.21.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.82.0/src/core/cmp.rs.html#854-856\">source</a></span><a href=\"#method.max\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.Ord.html#method.max\" class=\"fn\">max</a>(self, other: Self) -&gt; Self<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Compares and returns the maximum of two values. <a href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.Ord.html#method.max\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.min\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.21.0\">1.21.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.82.0/src/core/cmp.rs.html#875-877\">source</a></span><a href=\"#method.min\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.Ord.html#method.min\" class=\"fn\">min</a>(self, other: Self) -&gt; Self<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Compares and returns the minimum of two values. <a href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.Ord.html#method.min\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clamp\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.50.0\">1.50.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.82.0/src/core/cmp.rs.html#901-904\">source</a></span><a href=\"#method.clamp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.Ord.html#method.clamp\" class=\"fn\">clamp</a>(self, min: Self, max: Self) -&gt; Self<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>,</div></h4></section></summary><div class='docblock'>Restrict a value to a certain interval. <a href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.Ord.html#method.clamp\">Read more</a></div></details></div></details>","Ord","skrifa::setting::VariationSetting"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-Setting%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/skrifa/setting.rs.html#21\">source</a><a href=\"#impl-PartialEq-for-Setting%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"skrifa/setting/struct.Setting.html\" title=\"struct skrifa::setting::Setting\">Setting</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/skrifa/setting.rs.html#21\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"skrifa/setting/struct.Setting.html\" title=\"struct skrifa::setting::Setting\">Setting</a>&lt;T&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>self</code> and <code>other</code> values to be equal, and is used by <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.82.0/src/core/cmp.rs.html#261\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>!=</code>. The default implementation is almost always sufficient,\nand should not be overridden without very good reason.</div></details></div></details>","PartialEq","skrifa::setting::VariationSetting"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialOrd-for-Setting%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/skrifa/setting.rs.html#21\">source</a><a href=\"#impl-PartialOrd-for-Setting%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a> for <a class=\"struct\" href=\"skrifa/setting/struct.Setting.html\" title=\"struct skrifa::setting::Setting\">Setting</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.partial_cmp\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/skrifa/setting.rs.html#21\">source</a><a href=\"#method.partial_cmp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp\" class=\"fn\">partial_cmp</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"skrifa/setting/struct.Setting.html\" title=\"struct skrifa::setting::Setting\">Setting</a>&lt;T&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/cmp/enum.Ordering.html\" title=\"enum core::cmp::Ordering\">Ordering</a>&gt;</h4></section></summary><div class='docblock'>This method returns an ordering between <code>self</code> and <code>other</code> values if one exists. <a href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.lt\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.82.0/src/core/cmp.rs.html#1178\">source</a></span><a href=\"#method.lt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.PartialOrd.html#method.lt\" class=\"fn\">lt</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests less than (for <code>self</code> and <code>other</code>) and is used by the <code>&lt;</code> operator. <a href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.PartialOrd.html#method.lt\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.le\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.82.0/src/core/cmp.rs.html#1196\">source</a></span><a href=\"#method.le\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.PartialOrd.html#method.le\" class=\"fn\">le</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests less than or equal to (for <code>self</code> and <code>other</code>) and is used by the\n<code>&lt;=</code> operator. <a href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.PartialOrd.html#method.le\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.gt\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.82.0/src/core/cmp.rs.html#1214\">source</a></span><a href=\"#method.gt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.PartialOrd.html#method.gt\" class=\"fn\">gt</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests greater than (for <code>self</code> and <code>other</code>) and is used by the <code>&gt;</code>\noperator. <a href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.PartialOrd.html#method.gt\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ge\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.82.0/src/core/cmp.rs.html#1232\">source</a></span><a href=\"#method.ge\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.PartialOrd.html#method.ge\" class=\"fn\">ge</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests greater than or equal to (for <code>self</code> and <code>other</code>) and is used by\nthe <code>&gt;=</code> operator. <a href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.PartialOrd.html#method.ge\">Read more</a></div></details></div></details>","PartialOrd","skrifa::setting::VariationSetting"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Setting%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/skrifa/setting.rs.html#29-35\">source</a><a href=\"#impl-Setting%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"struct\" href=\"skrifa/setting/struct.Setting.html\" title=\"struct skrifa::setting::Setting\">Setting</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/skrifa/setting.rs.html#32-34\">source</a><h4 class=\"code-header\">pub fn <a href=\"skrifa/setting/struct.Setting.html#tymethod.new\" class=\"fn\">new</a>(selector: <a class=\"struct\" href=\"skrifa/struct.Tag.html\" title=\"struct skrifa::Tag\">Tag</a>, value: T) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Creates a new setting from the given selector tag and its associated\nvalue.</p>\n</div></details></div></details>",0,"skrifa::setting::VariationSetting"],["<section id=\"impl-Copy-for-Setting%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/skrifa/setting.rs.html#21\">source</a><a href=\"#impl-Copy-for-Setting%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"skrifa/setting/struct.Setting.html\" title=\"struct skrifa::setting::Setting\">Setting</a>&lt;T&gt;</h3></section>","Copy","skrifa::setting::VariationSetting"],["<section id=\"impl-Eq-for-Setting%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/skrifa/setting.rs.html#21\">source</a><a href=\"#impl-Eq-for-Setting%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"skrifa/setting/struct.Setting.html\" title=\"struct skrifa::setting::Setting\">Setting</a>&lt;T&gt;</h3></section>","Eq","skrifa::setting::VariationSetting"],["<section id=\"impl-StructuralPartialEq-for-Setting%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/skrifa/setting.rs.html#21\">source</a><a href=\"#impl-StructuralPartialEq-for-Setting%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"skrifa/setting/struct.Setting.html\" title=\"struct skrifa::setting::Setting\">Setting</a>&lt;T&gt;</h3></section>","StructuralPartialEq","skrifa::setting::VariationSetting"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[28045]}