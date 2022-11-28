!c::_OpenCMDHere()

_OpenCMDHere()
{
    If WinActive("ahk_class CabinetWClass")
        _WinHWND := WinActive()
        For Win in ComObjCreate("Shell.Application").Windows
            If (Win.HWND = _WinHWND)
            {
                _pwd := SubStr(Win.LocationURL, 9)
                _pwd := RegExReplace(_pwd, "%20", " ")
                _pwd := RegExReplace(_pwd, "%26", "&") ; Fix issues with '&' in the path
                _pwd := RegExReplace(_pwd, "/", "\")
            }
    Run, "C:\Windows\System32\cmd.exe" /T:0A /D /K PROMPT $P$G$_$G, % _pwd ? _pwd : "C:\Windows\System32\", Max
}
Return