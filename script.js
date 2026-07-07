const amigos = [
    {
      nome: "Pedro",
      foto: "fotos/pedrobalifts.png",
      apelido: "O rei cavalo",
      cidade: "Braga",
      aniversario: "Algum dia do ano",
      ocupacao: "Farmador",
      bio: "Apenas um horse que escuta audio do tiktok pra treinar",
      tags: ["Aura", "Cantina", "You", "Instagram"]
    },
    {
      nome: "Kayna com ~",  
      foto: "fotos/kayna.jpeg",
      apelido: "Escuridão",
      cidade: "RJ, Pobre",
      aniversario: "Por ai",
      ocupacao: "N faz nada",
      bio: "Ja escutou mais q ta confusa doque um \"Eu te amo\" da propria mãe",
      tags: ["churrasco", "Banana", "DeepWoken"]
    },
    {
      nome: "Rui",
      foto: "fotos/ruizini.jpeg",
      apelido: "Ruizini bananini",
      cidade: "Braga, PT",
      aniversario: "N importa",
      ocupacao: "Boneco",
      bio: "Suiça 1 x 0 Rui",
      tags: ["Inimigo do mapa", "Pinada", "Vava"]
    },
    {
      nome: "Duarte",
      foto: "fotos/duartedesgraca.jpeg",
      apelido: "Bolinha",
      cidade: "Braga, PT",
      aniversario: "28 de Agosto",
      ocupacao: "Epbiano",
      bio: "Sempre disposto a ferrar ainda mais o ombro.",
      tags: ["Braga > Guimarães", "Imortal", "Ombrinho"]
    },
    {
      nome: "Tiago",
      foto: "fotos/tiago.png",
      apelido: "Femboy 2",
      cidade: "Braga, Pt",
      aniversario: "14 de novembro",
      ocupacao: "Religioso",
      bio: "Deus abençoe a todos e elemine o Rui",
      tags: ["SoTreinaPerna", "ARK", "Gym"]
    },
    {
      nome: "Leonardo",
      foto: "fotos/leonardo.jpeg",
      apelido: "Femboy 1",
      cidade: "Braga, PT",
      aniversario: "8 de junho",
      ocupacao: "JBL ambulante",
      bio: "O bolinha n quer ir vava :( .",
      tags: ["Editor", "Vava", "Pai"]
    },
    {
      nome: "Gustavo",
      foto: "fotos/gustavo.png",
      apelido: "jobinho",
      cidade: "Ponta Grossa, BR",
      aniversario: "23 de abril",
      ocupacao: "Programador na EPB",
      bio: "Oque é um High tier EPBian para um God tier Cavalo.",
      tags: ["Marim", "Chad", "67"]
    },
    {
      nome: "Rodrigo",
      foto: "fotos/henrique.jpg",
      apelido: "o cinéfilo",
      cidade: "Recife, PE",
      aniversario: "2 de dezembro",
      ocupacao: "Professor",
      bio: "Já assistiu tudo que existe na Mubi duas vezes. Sempre tem uma referência de filme pra qualquer situação da vida.",
      tags: ["cinema", "história", "xadrez"]
    },
    {
      nome: "Moto Moto",
      foto: "",
      apelido: "gigante",
      cidade: "Braga",
      aniversario: "Algum dia do ano essa baleia",
      ocupacao: "Todos os lugares",
      bio:"Comeu tudo que tinha no planeta e agr o mohamed passa fome",
      tags: ["Gordo", "Gigante", "Baleia", "Enorme", "Geladeira", "Planeta", "Barriga de nós todos"]
    }
  ];

  const menu = document.getElementById('menu');
  const perfisContainer = document.getElementById('perfis');

  function iniciais(nome){
    return nome.split(' ').map(p => p[0]).slice(0,2).join('').toUpperCase();
  }

  amigos.forEach((amigo, i) => {
    // botão do menu
    const btn = document.createElement('button');
    btn.textContent = amigo.nome.split(' ')[0];
    btn.dataset.index = i;
    btn.addEventListener('click', () => mostrarPerfil(i));
    menu.appendChild(btn);

    // se tiver foto, mostra a imagem; se não tiver (ou der erro ao carregar), mostra as iniciais
    const avatarHTML = amigo.foto
      ? `<img src="${amigo.foto}" alt="Foto de ${amigo.nome}" onerror="this.parentElement.innerHTML='${iniciais(amigo.nome)}'">`
      : iniciais(amigo.nome);

    // cartão de perfil
    const div = document.createElement('div');
    div.className = 'perfil';
    div.id = 'perfil-' + i;
    div.innerHTML = `
      <div class="capa"></div>
      <div class="perfil-conteudo">
        <div class="avatar">${avatarHTML}</div>
        <div class="nome">${amigo.nome}</div>
        <div class="apelido">"${amigo.apelido}"</div>
        <div class="info-grid">
          <div><b>Cidade</b>${amigo.cidade}</div>
          <div><b>Aniversário</b>${amigo.aniversario}</div>
          <div><b>Ocupação</b>${amigo.ocupacao}</div>
        </div>
        <div class="bio">${amigo.bio}</div>
        <div class="tags">${amigo.tags.map(t => `<span>#${t}</span>`).join('')}</div>
      </div>
    `;
    perfisContainer.appendChild(div);
  });

  function mostrarPerfil(i){
    document.querySelectorAll('.perfil').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('#menu button').forEach(b => b.classList.remove('active'));
    document.getElementById('perfil-' + i).classList.add('active');
    document.querySelector(`#menu button[data-index="${i}"]`).classList.add('active');
  }

  mostrarPerfil(0); 