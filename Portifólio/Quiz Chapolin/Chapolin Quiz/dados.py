import  pandas as pd

#Perguntas

perguntas = [
            ["Qual o número da casa do Seu Madruga?", "A. 14","B. 24","C. 71","D. 72", 4],
            ["Qual destes não é um aluno do Professor Girafales?", "A. Chaves","B. Quico","C. Dona Clotilde","D. Chiquinha", 3], 
            ["Qual o apelido da Dona Clotilde?", "A. Bruxa do 71","B. Velha coroca","C. Lombriga Anêmica","D. Senhorita Gloria", 1],
            ["Quantos meses de aluguel o Seu Madruga deve?", "A. 11","B. 12", "C. 13", "D.14", 4],
            ["Como se chamam as novas vizinhas?", "A. Olga e Beatriz","B. Renata e Ana","C. Glória e Paty","D. Clotilde e Florinda", 3],
            ["Para qual cidade praiana a turma do Chaves viajou?", "A. Acapulco","B. Cancún","C. Vera Cruz","D. Puerto Escondido", 1],
            ["Qual desses bordões não é do Chaves?", "A. Isso, isso, isso","B. Ninguém tem paciência comigo","C. Tá bom, mas não se irrite","D. Pois é, pois é, pois é", 4],
            ["Quem era ladrão da vila?", "A. Chaves","B. Seu Furtado","C. Seu Madruga","D. Seu Roubado", 1],
            ["O que o Professor Girafales sempre leva para a Dona Florinda?", "A. Flores","B. Chocolates","C. Caramelos","D. Café", 1],
            ["Como se chama o cachorrinho do Quico?", "A. Satanás","B. Bochechão","C. Madruguinha","D. Magrelinho", 3],
            ['Qual destes não é um apelido do Seu Madruga?','A. Esqueleto Rumbeiro','B. Barriga de Minhoca','C. Tripa Escorrida','D. Cano de Encanamento', 4],
            ['Quantos anos tem o Chaves?','A. 7','B. 8','C. 9','D. 10', 2],
            ['Como se chama o pai do Quico?','A. Frederico','B. Ernesto','C. Antonio','D. Luiz', 1],
            ['Qual o nome do criador de Chaves?','A. Manuel El Loco Valdez','B. Pedro Infante','C. Roberto Goméz Bolaños','D. Cantinflas', 3],
            ['Qual instrumento musical Seu Madruga tenta ensinar Chaves a tocar?','A. Piano','B. Violão','Baixo.','Banjo.', 2],
            ['Qual o parentesco entre Dona Neves e Chiquinha?','A. Vó e neta','B. Tia avó e sobrinha neta','C. Mãe e filha','D. Bisavó e bisneta', 4],
            ['Qual desses trabalhos o Seu Madruga nunca teve?','A. Vendedor','B. Garçom','C. Cabelereiro','D. Sapateiro', 2],
            ['Quantas vezes o verso do Cão Arrempedido é repetido?','A. 22','B. 33','C. 44','D. 55', 3],
            ['Em que cidade nasceu Jaiminho o carteiro?','A. Monterrey','B. Guadalajara','C. Acapulco','D. Tangamandápio', 4],
            ['Qual a comida preferida do Chaves?','A. Sanduíche de presunto','B. Cachorro quente','C. Pizza','D. Bolacha', 1],
            ['Qual o nome do episódio em que o Quico ganha um gato?','A. O atropelamento','B. A casa da Bruxa do 71','C. Era uma vez um gato','D. O aniversário do Quico', 3],
            ['Como era o nome do restaurante da Dona Florinda antes de ser dela?','A. Rica Pancita','B. Fonda','C. Bar do Chespirito','D. Venda da Esquina', 2],
            ['Como se chama o careca que queria comprar a vila?','A. Sr. Calvo','B. Cuca Lisinha','C. Sr. Calvillo','D. Sr. Carequinha', 3],
            ['De que cidade era o tecido que o Seu Madruga ganha em uma rifa?', 'A. Taubaté','B. Piracicaba','C. Guarulhos','D. Santos', 1],
            ['Qual desses não é um ingrediente da fórmula da invisibilidade que Chiquinha ensina a Chaves e Quico?', 'A. Óleo de Rícino','B. Vinagre','C. Pimenta','D. Katchup', 4],
            ['De qual ator famoso Chiquinha espera receber uma carta no episódio Nasce uma Bisavó?','A. Marlon Brando','B. John Travolta','C. Al Pacino','D. Harison Ford', 2],
            ['Onde morava a irmã de Dona Clotilde?', 'A. Londres','B. Berlim','C. Paris','D. Roma', 3],
            ['Quais os sabores dos refrescos do Chaves?', 'A. Groselha, limão e tamarindo','B. Abacaxi, limão e groselha','C. Groselha, limão e maçã','D. Laranja, limão e manga', 1],
            ['Segundo a Dona Neves, quantos inquilinos moram na vila?','A. 87','B. 64','C. 89','D. 78', 4],
            ['Qual o brinquedo que Quico mais quer ganhar?','A. Bonequinho do Chapolin','B. Bola quadrada','C. Video Game','D. Triciclo', 2],
            ['De que ano é o episódio mais antigo de Chaves que se tem registro?','A. 1971','B. 1972','C. 1973','D. 1974', 2],
            ['Qual foi o último episódio de Chaves como seriado independente?', 'A. Os Hospedes do Senhor Barriga','B. Os Ratos no Restaurante','C. Peludinho','D. Antes um Tanque funcionando que uma lavadra encrencada', 4],
            ['Qual o episódio de Chaves que mais tem remakes?', 'A. O Banho do Chaves','B. As Novas Vizinhas','C. A Casa da Bruxa do 71','D. Aula de Canto', 1],
            ['Como se chama o episódio em que Seu Madruga e Chiquinha moram no 14?', 'A. Ama o teu inimigo','B. Zarabatana e Chumbinhos','C. A Moeda Perdida','D. Remédio Duro de Engolir', 4],
            ['Qual dessas cores de camiseta o Seu Madruga nunca usou?', 'A. Preta','B. Verde','C. Branca','D. Amarela', 2],
            ['Quais desses personagens não são interpretados pelo(a) mesmo(a) ator(atriz)?', 'A. Godinez e garçom de Acapulco','B. Candida e Elizabeth','C. Pópis e Dona Florinda','D. Seu Calvillo e Garçom do Restaurante da Dona Florinda', 2],
            ['Antes de Satanás, Dona Clotilde já teve uma cachorrinha. Qual o nome dela?', 'A. Canela','B. Bruxinha','C. Pretinha','D. Capetinha', 1],
            ['Por quanto tempo os moradores ficam na casa do Senhor Barriga?', 'A. 14 meses','B. 15 anos','C. 15 dias','D. 14 dias', 3],
            ['Segundo Chaves, no episódio Os Espíritos Zombeteiros, de 1974, em qual estado nasceu Seu Madruga?', 'A. São Paulo','B. Paraná','C. Santa Catarina','D. Rio Grande do Sul', 3],
            ['No episódio que o Quico fica doente, de quanto em quanto tempo ele tem que tomar seus remédios?', 'A. A cada 1 hora','B. A cada 2 horas','C. A cada 3 horas','D. A cada 4 horas', 2]
]

df = pd.DataFrame(perguntas, columns=["Perguntas", "Opcao 1", "Opcao 2", "Opcao 3", "Opcao 4", "Resposta"])
df.to_excel("perguntas.xlsx", index=False)