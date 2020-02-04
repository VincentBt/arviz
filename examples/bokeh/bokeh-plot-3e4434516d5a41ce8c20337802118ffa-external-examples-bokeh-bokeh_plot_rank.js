(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("81b272fb-7693-4624-933d-fd6d01ca7c92");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '81b272fb-7693-4624-933d-fd6d01ca7c92' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.4.0.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"93b4a9d9-0677-4a8b-ae66-8985f320d6fd":{"roots":{"references":[{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118358","type":"Selection"},"selection_policy":{"id":"118357","type":"UnionRenderers"}},"id":"118314","type":"ColumnDataSource"},{"attributes":{},"id":"118249","type":"BasicTicker"},{"attributes":{},"id":"118261","type":"SaveTool"},{"attributes":{},"id":"118344","type":"Selection"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118282","type":"VBar"},{"attributes":{},"id":"118215","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"118253","type":"PanTool"},{"id":"118254","type":"BoxZoomTool"},{"id":"118255","type":"WheelZoomTool"},{"id":"118256","type":"BoxSelectTool"},{"id":"118257","type":"LassoSelectTool"},{"id":"118258","type":"UndoTool"},{"id":"118259","type":"RedoTool"},{"id":"118260","type":"ResetTool"},{"id":"118261","type":"SaveTool"},{"id":"118262","type":"HoverTool"}]},"id":"118263","type":"Toolbar"},{"attributes":{"data_source":{"id":"118314","type":"ColumnDataSource"},"glyph":{"id":"118315","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118316","type":"VBar"},"selection_glyph":null,"view":{"id":"118318","type":"CDSView"}},"id":"118317","type":"GlyphRenderer"},{"attributes":{},"id":"118348","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"ticker":{"id":"118249","type":"BasicTicker"}},"id":"118252","type":"Grid"},{"attributes":{},"id":"118241","type":"LinearScale"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118356","type":"Selection"},"selection_policy":{"id":"118355","type":"UnionRenderers"}},"id":"118308","type":"ColumnDataSource"},{"attributes":{"children":[[{"id":"118196","subtype":"Figure","type":"Plot"},0,0],[{"id":"118236","subtype":"Figure","type":"Plot"},0,1]]},"id":"118362","type":"GridBox"},{"attributes":{},"id":"118356","type":"Selection"},{"attributes":{},"id":"118332","type":"BasicTickFormatter"},{"attributes":{},"id":"118343","type":"UnionRenderers"},{"attributes":{},"id":"118353","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"118320","type":"ColumnDataSource"},"glyph":{"id":"118321","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118322","type":"VBar"},"selection_glyph":null,"view":{"id":"118324","type":"CDSView"}},"id":"118323","type":"GlyphRenderer"},{"attributes":{},"id":"118239","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"118334","type":"BoxAnnotation"},{"attributes":{"ticks":[0,1,2,3]},"id":"118298","type":"FixedTicker"},{"attributes":{},"id":"118333","type":"BasicTickFormatter"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118322","type":"VBar"},{"attributes":{"callback":null},"id":"118262","type":"HoverTool"},{"attributes":{"callback":null},"id":"118197","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118360","type":"Selection"},"selection_policy":{"id":"118359","type":"UnionRenderers"}},"id":"118320","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"118215","type":"PanTool"},{"id":"118216","type":"BoxZoomTool"},{"id":"118217","type":"WheelZoomTool"},{"id":"118218","type":"BoxSelectTool"},{"id":"118219","type":"LassoSelectTool"},{"id":"118220","type":"UndoTool"},{"id":"118221","type":"RedoTool"},{"id":"118222","type":"ResetTool"},{"id":"118223","type":"SaveTool"},{"id":"118224","type":"HoverTool"}]},"id":"118225","type":"Toolbar"},{"attributes":{},"id":"118357","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118303","type":"VBar"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"118297","type":"Span"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118321","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118316","type":"VBar"},{"attributes":{},"id":"118342","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"118335","type":"BoxAnnotation"},{"attributes":{},"id":"118260","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"118350","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"118334","type":"BoxAnnotation"}},"id":"118216","type":"BoxZoomTool"},{"attributes":{},"id":"118259","type":"RedoTool"},{"attributes":{},"id":"118340","type":"Selection"},{"attributes":{},"id":"118355","type":"UnionRenderers"},{"attributes":{},"id":"118359","type":"UnionRenderers"},{"attributes":{},"id":"118253","type":"PanTool"},{"attributes":{"data_source":{"id":"118308","type":"ColumnDataSource"},"glyph":{"id":"118309","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118310","type":"VBar"},"selection_glyph":null,"view":{"id":"118312","type":"CDSView"}},"id":"118311","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"118336","type":"PolyAnnotation"},{"attributes":{},"id":"118339","type":"UnionRenderers"},{"attributes":{"source":{"id":"118292","type":"ColumnDataSource"}},"id":"118296","type":"CDSView"},{"attributes":{"axis_label":"Chain","formatter":{"id":"118349","type":"BasicTickFormatter"},"ticker":{"id":"118326","type":"FixedTicker"}},"id":"118248","type":"LinearAxis"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"118313","type":"Span"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118304","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118315","type":"VBar"},{"attributes":{},"id":"118358","type":"Selection"},{"attributes":{},"id":"118217","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"118350","type":"BoxAnnotation"}},"id":"118254","type":"BoxZoomTool"},{"attributes":{"text":"tau"},"id":"118300","type":"Title"},{"attributes":{},"id":"118337","type":"UnionRenderers"},{"attributes":{},"id":"118341","type":"UnionRenderers"},{"attributes":{"ticks":[0,1,2,3]},"id":"118326","type":"FixedTicker"},{"attributes":{"callback":null,"overlay":{"id":"118335","type":"BoxAnnotation"}},"id":"118218","type":"BoxSelectTool"},{"attributes":{},"id":"118255","type":"WheelZoomTool"},{"attributes":{},"id":"118338","type":"Selection"},{"attributes":{"ticker":{"id":"118206","type":"BasicTicker"}},"id":"118209","type":"Grid"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118338","type":"Selection"},"selection_policy":{"id":"118337","type":"UnionRenderers"}},"id":"118274","type":"ColumnDataSource"},{"attributes":{"callback":null,"overlay":{"id":"118336","type":"PolyAnnotation"}},"id":"118219","type":"LassoSelectTool"},{"attributes":{"callback":null,"overlay":{"id":"118351","type":"BoxAnnotation"}},"id":"118256","type":"BoxSelectTool"},{"attributes":{},"id":"118360","type":"Selection"},{"attributes":{"source":{"id":"118314","type":"ColumnDataSource"}},"id":"118318","type":"CDSView"},{"attributes":{"below":[{"id":"118205","type":"LinearAxis"}],"center":[{"id":"118209","type":"Grid"},{"id":"118214","type":"Grid"},{"id":"118279","type":"Span"},{"id":"118285","type":"Span"},{"id":"118291","type":"Span"},{"id":"118297","type":"Span"}],"left":[{"id":"118210","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"118277","type":"GlyphRenderer"},{"id":"118283","type":"GlyphRenderer"},{"id":"118289","type":"GlyphRenderer"},{"id":"118295","type":"GlyphRenderer"}],"title":{"id":"118300","type":"Title"},"toolbar":{"id":"118225","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"118197","type":"DataRange1d"},"x_scale":{"id":"118201","type":"LinearScale"},"y_range":{"id":"118199","type":"DataRange1d"},"y_scale":{"id":"118203","type":"LinearScale"}},"id":"118196","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"118274","type":"ColumnDataSource"}},"id":"118278","type":"CDSView"},{"attributes":{},"id":"118201","type":"LinearScale"},{"attributes":{"toolbar":{"id":"118363","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"118364","type":"ToolbarBox"},{"attributes":{},"id":"118220","type":"UndoTool"},{"attributes":{"callback":null,"overlay":{"id":"118352","type":"PolyAnnotation"}},"id":"118257","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"118292","type":"ColumnDataSource"},"glyph":{"id":"118293","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118294","type":"VBar"},"selection_glyph":null,"view":{"id":"118296","type":"CDSView"}},"id":"118295","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118344","type":"Selection"},"selection_policy":{"id":"118343","type":"UnionRenderers"}},"id":"118292","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"118199","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118342","type":"Selection"},"selection_policy":{"id":"118341","type":"UnionRenderers"}},"id":"118286","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118340","type":"Selection"},"selection_policy":{"id":"118339","type":"UnionRenderers"}},"id":"118280","type":"ColumnDataSource"},{"attributes":{},"id":"118354","type":"Selection"},{"attributes":{"tools":[{"id":"118215","type":"PanTool"},{"id":"118216","type":"BoxZoomTool"},{"id":"118217","type":"WheelZoomTool"},{"id":"118218","type":"BoxSelectTool"},{"id":"118219","type":"LassoSelectTool"},{"id":"118220","type":"UndoTool"},{"id":"118221","type":"RedoTool"},{"id":"118222","type":"ResetTool"},{"id":"118223","type":"SaveTool"},{"id":"118224","type":"HoverTool"},{"id":"118253","type":"PanTool"},{"id":"118254","type":"BoxZoomTool"},{"id":"118255","type":"WheelZoomTool"},{"id":"118256","type":"BoxSelectTool"},{"id":"118257","type":"LassoSelectTool"},{"id":"118258","type":"UndoTool"},{"id":"118259","type":"RedoTool"},{"id":"118260","type":"ResetTool"},{"id":"118261","type":"SaveTool"},{"id":"118262","type":"HoverTool"}]},"id":"118363","type":"ProxyToolbar"},{"attributes":{},"id":"118221","type":"RedoTool"},{"attributes":{},"id":"118258","type":"UndoTool"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118288","type":"VBar"},{"attributes":{},"id":"118222","type":"ResetTool"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"118279","type":"Span"},{"attributes":{},"id":"118203","type":"LinearScale"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118287","type":"VBar"},{"attributes":{"source":{"id":"118308","type":"ColumnDataSource"}},"id":"118312","type":"CDSView"},{"attributes":{},"id":"118223","type":"SaveTool"},{"attributes":{"children":[{"id":"118364","type":"ToolbarBox"},{"id":"118362","type":"GridBox"}]},"id":"118365","type":"Column"},{"attributes":{"source":{"id":"118320","type":"ColumnDataSource"}},"id":"118324","type":"CDSView"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"118332","type":"BasicTickFormatter"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"118206","type":"BasicTicker"}},"id":"118205","type":"LinearAxis"},{"attributes":{"source":{"id":"118302","type":"ColumnDataSource"}},"id":"118306","type":"CDSView"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118281","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118294","type":"VBar"},{"attributes":{"callback":null},"id":"118224","type":"HoverTool"},{"attributes":{"data_source":{"id":"118286","type":"ColumnDataSource"},"glyph":{"id":"118287","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118288","type":"VBar"},"selection_glyph":null,"view":{"id":"118290","type":"CDSView"}},"id":"118289","type":"GlyphRenderer"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"118325","type":"Span"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118309","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"118352","type":"PolyAnnotation"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118310","type":"VBar"},{"attributes":{},"id":"118206","type":"BasicTicker"},{"attributes":{"below":[{"id":"118243","type":"LinearAxis"}],"center":[{"id":"118247","type":"Grid"},{"id":"118252","type":"Grid"},{"id":"118307","type":"Span"},{"id":"118313","type":"Span"},{"id":"118319","type":"Span"},{"id":"118325","type":"Span"}],"left":[{"id":"118248","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"118305","type":"GlyphRenderer"},{"id":"118311","type":"GlyphRenderer"},{"id":"118317","type":"GlyphRenderer"},{"id":"118323","type":"GlyphRenderer"}],"title":{"id":"118328","type":"Title"},"toolbar":{"id":"118263","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"118197","type":"DataRange1d"},"x_scale":{"id":"118239","type":"LinearScale"},"y_range":{"id":"118199","type":"DataRange1d"},"y_scale":{"id":"118241","type":"LinearScale"}},"id":"118236","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"118211","type":"BasicTicker"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118293","type":"VBar"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"118285","type":"Span"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"118348","type":"BasicTickFormatter"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"118244","type":"BasicTicker"}},"id":"118243","type":"LinearAxis"},{"attributes":{"data_source":{"id":"118280","type":"ColumnDataSource"},"glyph":{"id":"118281","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118282","type":"VBar"},"selection_glyph":null,"view":{"id":"118284","type":"CDSView"}},"id":"118283","type":"GlyphRenderer"},{"attributes":{"axis_label":"Chain","formatter":{"id":"118333","type":"BasicTickFormatter"},"ticker":{"id":"118298","type":"FixedTicker"}},"id":"118210","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"118351","type":"BoxAnnotation"},{"attributes":{"text":"mu"},"id":"118328","type":"Title"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118275","type":"VBar"},{"attributes":{},"id":"118244","type":"BasicTicker"},{"attributes":{"data_source":{"id":"118302","type":"ColumnDataSource"},"glyph":{"id":"118303","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118304","type":"VBar"},"selection_glyph":null,"view":{"id":"118306","type":"CDSView"}},"id":"118305","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"118274","type":"ColumnDataSource"},"glyph":{"id":"118275","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118276","type":"VBar"},"selection_glyph":null,"view":{"id":"118278","type":"CDSView"}},"id":"118277","type":"GlyphRenderer"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"118307","type":"Span"},{"attributes":{"source":{"id":"118286","type":"ColumnDataSource"}},"id":"118290","type":"CDSView"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118354","type":"Selection"},"selection_policy":{"id":"118353","type":"UnionRenderers"}},"id":"118302","type":"ColumnDataSource"},{"attributes":{"dimension":1,"ticker":{"id":"118211","type":"BasicTicker"}},"id":"118214","type":"Grid"},{"attributes":{},"id":"118349","type":"BasicTickFormatter"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"118291","type":"Span"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118276","type":"VBar"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"118319","type":"Span"},{"attributes":{"source":{"id":"118280","type":"ColumnDataSource"}},"id":"118284","type":"CDSView"},{"attributes":{"ticker":{"id":"118244","type":"BasicTicker"}},"id":"118247","type":"Grid"}],"root_ids":["118365"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"93b4a9d9-0677-4a8b-ae66-8985f320d6fd","roots":{"118365":"81b272fb-7693-4624-933d-fd6d01ca7c92"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();