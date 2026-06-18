#!/bin/bash

# Prompt Labs - Setup Automático
# Este script organiza todos os arquivos já convertidos nas pastas corretas

echo "🚀 Prompt Labs - Iniciando setup automático..."
echo ""

# Cores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Criar pastas se não existirem
mkdir -p templates/pdf templates/images assets/palette brand

# Função para mover arquivo com feedback
move_file() {
    local source=$1
    local dest=$2
    local file_type=$3

    if [ -f "$source" ]; then
        cp "$source" "$dest"
        echo -e "${GREEN}✓${NC} $file_type movido para $dest"
    else
        echo -e "${YELLOW}⚠${NC} $file_type não encontrado em $source"
        echo "   Procure por: $(basename $source)"
    fi
}

echo -e "${BLUE}Movendo PDFs de capas...${NC}"
move_file "capa-foundations.pdf" "templates/pdf/capa-foundations.pdf" "PDF Foundations"
move_file "PDF_Cover_-_Foundations_Template_dc.pdf" "templates/pdf/capa-foundations.pdf" "PDF Foundations (alt)"
move_file "capa-professional.pdf" "templates/pdf/capa-professional.pdf" "PDF Professional"
move_file "PDF_Cover_-_Professional_Template_dc.pdf" "templates/pdf/capa-professional.pdf" "PDF Professional (alt)"
move_file "capa-enterprise.pdf" "templates/pdf/capa-enterprise.pdf" "PDF Enterprise"
move_file "PDF_Cover_-_Enterprise_Template_dc.pdf" "templates/pdf/capa-enterprise.pdf" "PDF Enterprise (alt)"

echo ""
echo -e "${BLUE}Movendo imagens de social media...${NC}"
move_file "email-header.png" "templates/images/email-header.png" "Email Header"
move_file "Email_Header_Template_dc.png" "templates/images/email-header.png" "Email Header (alt)"
move_file "email-pdf-promo.png" "templates/images/email-pdf-promo.png" "Email PDF Promo"
move_file "Email_PDF_Promo_Template_dc.png" "templates/images/email-pdf-promo.png" "Email PDF Promo (alt)"
move_file "linkedin-banner.png" "templates/images/linkedin-banner.png" "LinkedIn Banner"
move_file "LinkedIn_Banner_Template_dc.png" "templates/images/linkedin-banner.png" "LinkedIn Banner (alt)"
move_file "twitter-banner.png" "templates/images/twitter-banner.png" "Twitter Banner"
move_file "Twitter_Banner_Template_dc.png" "templates/images/twitter-banner.png" "Twitter Banner (alt)"

echo ""
echo -e "${BLUE}Movendo assets...${NC}"
move_file "prompt-labs-color-palette.pdf" "assets/palette/prompt-labs-color-palette.pdf" "Paleta de cores"
move_file "logo.svg" "brand/logo.svg" "Logo SVG"
move_file "prompt-labs-logo.svg" "brand/logo.svg" "Logo SVG (alt)"

echo ""
echo -e "${GREEN}✓ Setup concluído!${NC}"
echo ""
echo -e "${BLUE}Próximos passos:${NC}"
echo "1. Verifique se todos os arquivos foram movidos corretamente"
echo "2. git add ."
echo "3. git commit -m 'Initial: Prompt Labs brand v1.0'"
echo "4. git remote add origin https://github.com/SEU_USUARIO/prompt-labs.git"
echo "5. git branch -M main"
echo "6. git push -u origin main"
echo ""
echo -e "${YELLOW}Para rodar este script:${NC}"
echo "bash setup.sh"
