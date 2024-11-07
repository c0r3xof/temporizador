; Defina o título da janela que você espera (título exato ou parte do título da aba do Chrome)
windowTitle := "Temporizador - Google"  ; O título exato ou parte dele

; Verificar se já existe uma janela do Chrome com o título correspondente
SetTitleMatchMode, 2 ; Permite correspondência parcial no título da janela

; Procurar pela janela do Chrome que contém o título definido
IfWinExist, ahk_class Chrome_WidgetWin_1  ; Isso garante que seja uma janela do Chrome
{
    ; Obter o título da janela
    WinGetTitle, currentTitle, A
    
    ; Verifica se o título da janela corresponde exatamente ao que você especificou
    If (currentTitle = windowTitle)
    {
        ; Se encontrar a janela, ativá-la
        WinActivate ; Ativa a janela correspondente ao título
        ; Garantir que a janela esteja sempre na frente de outras
        WinSet, AlwaysOnTop, On
    }
    else
    {
        MsgBox, Não encontrei uma janela do Chrome com o título exato "%windowTitle%".
    }
}
else
{
    MsgBox, Não encontrei uma janela do Chrome.
}

return
