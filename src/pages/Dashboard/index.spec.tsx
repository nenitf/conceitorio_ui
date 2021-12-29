import { render, screen, within } from '@testing-library/react';
import * as consultasApi from 'apis/consultas';
import Dashboard from './index';

describe('Dashboard da administração', () => {
  describe('Quando renderizo o componente', () => {
    it('Lista navegação para relatórios de setores', async () => {
      const consultas = {
        data: [
          {
            id: 1,
            paciente: {
              id: 1,
              nome: 'José'
            },
            confirmado: true
          },
          {
            id: 3,
            paciente: {
              id: 11,
              nome: 'Adriana'
            },
            confirmado: true
          }
        ]
      }

      consultasApi.getConsultasFuturas = jest.fn()
        .mockReturnValue(Promise.resolve(consultas));

      render(<Dashboard />);

      const lista = await screen.findByRole('list', { name: /próximas consultas/i });
      const itens = await within(lista).findAllByRole('listitem');
      expect(itens).toHaveLength(2);

      // [
        // [/josé/i, '/consulta/1'],
        // [/adriana/i, '/consulta/3'],
      // ].forEach(async function(p) {
        // const link = await within(lista).findByRole('link', { name: p[0] });
        // expect(link).toBeInTheDocument();
        // expect(link).toHaveAttribute('href', p[1]);
      // });
    });
  });
});
