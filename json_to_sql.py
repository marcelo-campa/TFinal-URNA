import json


with open(r'C:\Users\mathe\Documents\Ciência da Computação\Top Esp em Engenharia de Software\Trab 4\urna-eletronica\etapas.json', encoding='utf-8') as fh:
    data = json.load(fh)

for tipoCand in data:
    tipoCandidato = data[tipoCand]
    titulo = tipoCandidato['titulo']
    numeros = tipoCandidato['numeros']
    candidatos = tipoCandidato['candidatos']
    for candidatoNum in candidatos.keys():
        numero = candidatoNum
        candidato = candidatos[numero]
        print('INSERT INTO candidatos(cargo, numero_digitos, nome, partido, foto, numero_voto, nome_vice, partido_vice, foto_vice)')
        print('VALUES(' + '\'' + str(titulo) + '\'' + ',' + '\''+ str(numeros) +'\''+ ',' + '\''+candidato['nome'] +'\''+ ',' + '\''+candidato['partido'] +'\''+ ',' + '\''+candidato['foto'] + '\'' + ',\'' + str(numero)+ '\'', end='')
        if('vice' in candidato.keys()):
            vice = candidato['vice']
            print(','+'\'' + vice['nome'] + '\''+',' +'\''+ vice['partido'] + '\''+',' + '\''+vice['foto']+ '\'' ');')
        else:
            print(',null, null, null);')

# keys_file = open(r'C:\Users\mathe\Documents\Ciência da Computação\Top Esp em Engenharia de Software\Trab 4\urna-eletronica\etapas.json')

# keys = keys_file.read().encode('utf-8')
# data = json.loads(keys)
