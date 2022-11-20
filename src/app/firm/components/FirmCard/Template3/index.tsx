import { CSSProperties } from 'react';
import imgEmpty from '@static/img-empty.jpg';
import logoEmpty from '@static/logo-empty.jpg';
import linkedin from '@static/firm-icons/linkedin-icon.webp';
import facebook from '@static/firm-icons/facebook-icon.webp';
import twitter from '@static/firm-icons/twitter-icon.webp';
import instagram from '@static/firm-icons/instagram-icon.webp';
import link from '@static/firm-icons/link-icon.webp';
import email from '@static/firm-icons/email-icon.webp';
import phone from '@static/firm-icons/phone-icon.webp';
import { useFirm } from '@app/firm/contexts/firm.provider';
import AnimateFade from '../AnimateFade';

const Template3 = () => {
  const {
    state: { firm, theme },
    copyTemplateRef,
  } = useFirm();

  const styleTable: CSSProperties = {
    width: '100%',
    maxWidth: '600px',
    borderCollapse: 'collapse',
  };

  const styleBorderBottom: CSSProperties = {
    borderBottom: `1px solid ${theme.themeColor}`,
  };

  const stylePhoto: CSSProperties = {
    display: 'inline-block',
    width: theme.themeSize * 100 + 'px',
    height: theme.themeSize * 100 + 'px',
    borderRadius: '50%',
    overflow: 'hidden',
  };

  const styleImgCover: CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const styleImgContain: CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    objectPosition: 'left',
  };

  const styleLogo: CSSProperties = {
    width: '100%',
    height: '32px',
    marginBottom: '1rem',
  };

  const styleSocialItem: CSSProperties = {
    backgroundColor: theme.linkColor,
    width: '24px',
    height: '24px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '0.25rem',
  };

  const stylePersonalInfo: CSSProperties = {
    color: theme.fontColor,
  };

  const styleName: CSSProperties = {
    marginBottom: '8px',
    fontWeight: 700,
    fontSize: theme.themeSize * 1.25 + 'rem',
  };

  const iconContact: CSSProperties = {
    background: theme.themeColor,
    width: '14px',
    marginRight: '0.5rem',
  };

  const defaultText: CSSProperties = {
    color: theme.fontColor,
    fontSize: theme.themeSize * 0.95 + 'rem',
  };

  return (
    <AnimateFade>
      <table
        cellPadding='16px'
        cellSpacing='0'
        style={styleTable}
        ref={copyTemplateRef}
      >
        <tbody>
          <tr style={styleBorderBottom}>
            <td style={{ width: '300px', verticalAlign: 'middle' }}>
              {/* Personal Info */}
              <div style={stylePersonalInfo}>
                <h3 style={styleName}>
                  {firm.personal.name || firm.personal.lastName
                    ? firm.personal.name + ' ' + firm.personal.lastName
                    : 'David Sandoval'}
                </h3>

                <div style={defaultText}>
                  {firm.personal.profession || 'Profesional del desarrollo web'}
                </div>

                <div style={defaultText}>
                  {firm.company.position || 'Desarrollador web'} |{' '}
                  {firm.company.companyName || 'Nombre de compañía'}
                </div>
                <div style={defaultText}> {firm.additional} </div>
              </div>
            </td>
            <td
              style={{
                width: '120px',
                textAlign: 'right',
                verticalAlign: 'middle',
              }}
            >
              {/* Picture */}
              <div style={stylePhoto}>
                <img
                  src={firm.personal.photo || imgEmpty}
                  alt='Foto de Perfil'
                  style={styleImgCover}
                />
              </div>
            </td>
          </tr>
          <tr style={styleBorderBottom}>
            <td>
              {/* Contact Info */}
              <div style={{ marginBottom: '0.35rem' }}>
                <img src={link} style={iconContact} />{' '}
                <span style={defaultText}>
                  {firm.contact.website ||
                    'jdeveloperd.github.io/jsandovalbd-page/'}
                </span>
              </div>
              <div style={{ marginBottom: '0.35rem' }}>
                <img src={email} style={iconContact} />{' '}
                <span style={defaultText}>
                  {firm.contact.email || 'jsandovalbd1993@gmail.com'}
                </span>
              </div>
              <div style={{ marginBottom: '0.35rem' }}>
                <img src={phone} style={iconContact} />{' '}
                <span style={defaultText}>
                  {firm.contact.celphone || '(+51) 987654321'}
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td width='160px' style={{}}>
              {/* Logo */}
              <div style={styleLogo}>
                <img
                  src={firm.company.companyLogo || logoEmpty}
                  alt='Logo de la Empresa'
                  style={styleImgContain}
                />
              </div>
            </td>
            <td>
              {/* Social Links */}
              <div style={{ textAlign: 'right' }}>
                <a
                  style={styleSocialItem}
                  target='_blank'
                  rel='noreferrer'
                  href='http://localhost'
                >
                  <img
                    src={linkedin}
                    alt=''
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </a>
                <a
                  style={styleSocialItem}
                  target='_blank'
                  rel='noreferrer'
                  href='http://localhost'
                >
                  <img
                    src={facebook}
                    alt=''
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </a>
                <a
                  style={styleSocialItem}
                  target='_blank'
                  rel='noreferrer'
                  href='http://localhost'
                >
                  <img
                    src={twitter}
                    alt=''
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </a>
                <a
                  style={styleSocialItem}
                  target='_blank'
                  rel='noreferrer'
                  href='http://localhost'
                >
                  <img
                    src={instagram}
                    alt=''
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </AnimateFade>
  );
};

export default Template3;
