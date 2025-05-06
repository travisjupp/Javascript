let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd /Volumes/Seagate/travisjupp_nde/Documents/Dev/_WebDev/Javascript
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
if &shortmess =~ 'A'
  set shortmess=aoOA
else
  set shortmess=aoO
endif
badd +10 l33t/recursiveFibonacci.js
badd +19 l33t/recursiveFibonacci.test.js
badd +100 term:///Volumes/Seagate/travisjupp_nde/Documents/Dev/_WebDev/Javascript/l33t//93433:/bin/zsh
argglobal
%argdel
$argadd l33t/recursiveFibonacci.js
edit l33t/recursiveFibonacci.js
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
wincmd _ | wincmd |
split
wincmd _ | wincmd |
split
2wincmd k
wincmd w
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 30 + 65) / 130)
exe '2resize ' . ((&lines * 16 + 25) / 51)
exe 'vert 2resize ' . ((&columns * 99 + 65) / 130)
exe '3resize ' . ((&lines * 17 + 25) / 51)
exe 'vert 3resize ' . ((&columns * 99 + 65) / 130)
exe '4resize ' . ((&lines * 13 + 25) / 51)
exe 'vert 4resize ' . ((&columns * 99 + 65) / 130)
argglobal
enew
file NvimTree_1
balt term:///Volumes/Seagate/travisjupp_nde/Documents/Dev/_WebDev/Javascript/l33t//93433:/bin/zsh
setlocal foldmethod=manual
setlocal foldexpr=0
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=99
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal nofoldenable
lcd /Volumes/Seagate/travisjupp_nde/Documents/Dev/_WebDev/Javascript/l33t
wincmd w
argglobal
if bufexists(fnamemodify("term:///Volumes/Seagate/travisjupp_nde/Documents/Dev/_WebDev/Javascript/l33t//93433:/bin/zsh", ":p")) | buffer term:///Volumes/Seagate/travisjupp_nde/Documents/Dev/_WebDev/Javascript/l33t//93433:/bin/zsh | else | edit term:///Volumes/Seagate/travisjupp_nde/Documents/Dev/_WebDev/Javascript/l33t//93433:/bin/zsh | endif
if &buftype ==# 'terminal'
  silent file term:///Volumes/Seagate/travisjupp_nde/Documents/Dev/_WebDev/Javascript/l33t//93433:/bin/zsh
endif
setlocal foldmethod=manual
setlocal foldexpr=0
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=99
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldenable
let s:l = 100 - ((15 * winheight(0) + 8) / 16)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 100
normal! 034|
lcd /Volumes/Seagate/travisjupp_nde/Documents/Dev/_WebDev/Javascript/l33t
wincmd w
argglobal
balt /Volumes/Seagate/travisjupp_nde/Documents/Dev/_WebDev/Javascript/l33t/recursiveFibonacci.test.js
setlocal foldmethod=manual
setlocal foldexpr=0
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=99
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldenable
silent! normal! zE
let &fdl = &fdl
let s:l = 21 - ((15 * winheight(0) + 8) / 17)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 21
normal! 02|
lcd /Volumes/Seagate/travisjupp_nde/Documents/Dev/_WebDev/Javascript/l33t
wincmd w
argglobal
if bufexists(fnamemodify("/Volumes/Seagate/travisjupp_nde/Documents/Dev/_WebDev/Javascript/l33t/recursiveFibonacci.test.js", ":p")) | buffer /Volumes/Seagate/travisjupp_nde/Documents/Dev/_WebDev/Javascript/l33t/recursiveFibonacci.test.js | else | edit /Volumes/Seagate/travisjupp_nde/Documents/Dev/_WebDev/Javascript/l33t/recursiveFibonacci.test.js | endif
if &buftype ==# 'terminal'
  silent file /Volumes/Seagate/travisjupp_nde/Documents/Dev/_WebDev/Javascript/l33t/recursiveFibonacci.test.js
endif
balt term:///Volumes/Seagate/travisjupp_nde/Documents/Dev/_WebDev/Javascript/l33t//93433:/bin/zsh
setlocal foldmethod=manual
setlocal foldexpr=0
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldenable
silent! normal! zE
14,22fold
1,24fold
let &fdl = &fdl
1
normal! zo
14
normal! zo
1
normal! zc
let s:l = 1 - ((0 * winheight(0) + 6) / 13)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1
normal! 0
lcd /Volumes/Seagate/travisjupp_nde/Documents/Dev/_WebDev/Javascript/l33t
wincmd w
3wincmd w
exe 'vert 1resize ' . ((&columns * 30 + 65) / 130)
exe '2resize ' . ((&lines * 16 + 25) / 51)
exe 'vert 2resize ' . ((&columns * 99 + 65) / 130)
exe '3resize ' . ((&lines * 17 + 25) / 51)
exe 'vert 3resize ' . ((&columns * 99 + 65) / 130)
exe '4resize ' . ((&lines * 13 + 25) / 51)
exe 'vert 4resize ' . ((&columns * 99 + 65) / 130)
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let &winminheight = s:save_winminheight
let &winminwidth = s:save_winminwidth
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
nohlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
