-- Fix optimization by:
when a draw function is called, rather then drawing it then, you need to remake the render buffer and have a section to hold a massive string. Now when this draw function is called add the to be drawed string to the render buffer so when the frame buffer loops throuhg it will render it and apply the neccissary shaders

-Add defualt shaders such as blur