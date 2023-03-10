import { expect } from 'chai'
import { describe, it } from 'mocha'
import EsNumToTextConverter from 'src/num-to-text-es'
import { ICaseTransform } from 'src/transforms/case-transform'
import LowerCaseTransform from 'src/transforms/lower-case-transform'
import TitleCaseTransform from 'src/transforms/title-case-transform'
import UpperCaseTransform from 'src/transforms/upper-case-transform'
import { BILLION, FIRST_VALUE_UNSUPPORTED, HUNDRED, MILLION, QUADRILLION, THOUSAND, TRILLION } from 'src/translation-texts'
import { CASE_STYLE_UPPER, GENDER_STYLE_FEMININE, NumToTextCaseStyle } from 'src/types'

describe('EsNumToTextConverter', () => {
  const transforms: ICaseTransform[] = [
    new LowerCaseTransform(),
    new UpperCaseTransform(),
    new TitleCaseTransform()
  ]
  const converter = new EsNumToTextConverter(transforms)


  it('Defaults', () => {
    expect(converter.translate(33, { case: ('OTRO' as NumToTextCaseStyle) })).equal('Treinta y tres')
  })

  it('Accepted range', () => {
    expect(converter.translate(HUNDRED)).equal('Cien')
    expect(converter.translate(THOUSAND)).equal('Mil')
    expect(converter.translate(MILLION)).equal('Un millón')
    expect(converter.translate(BILLION)).equal('Un billón')
    expect(() => converter.translate(FIRST_VALUE_UNSUPPORTED)).throws()
  })

  it('Simple numbers', () => {
    expect(converter.translate(0)).equal('Cero')
    expect(converter.translate(1)).equal('Uno')
    expect(converter.translate(2)).equal('Dos')
    expect(converter.translate(3)).equal('Tres')
    expect(converter.translate(4)).equal('Cuatro')
    expect(converter.translate(5)).equal('Cinco')
    expect(converter.translate(6)).equal('Seis')
    expect(converter.translate(7)).equal('Siete')
    expect(converter.translate(8)).equal('Ocho')
    expect(converter.translate(9)).equal('Nueve')
    expect(converter.translate(10)).equal('Diez')
  })

  it('Simple numbers fem', () => {
    expect(converter.translate(1, { suffix: { plural: 'peras', singular: 'pera' }, gender: GENDER_STYLE_FEMININE })).equal('Una pera')
    expect(converter.translate(2, { suffix: { plural: 'peras', singular: 'pera' }, gender: GENDER_STYLE_FEMININE })).equal('Dos peras')
  })

  it('Numbers 11 => 29 ', () => {
    expect(converter.translate(11)).equal('Once')
    expect(converter.translate(12)).equal('Doce')
    expect(converter.translate(13)).equal('Trece')
    expect(converter.translate(14)).equal('Catorce')
    expect(converter.translate(15)).equal('Quince')
    expect(converter.translate(16)).equal('Dieciséis')
    expect(converter.translate(17)).equal('Diecisiete')
    expect(converter.translate(18)).equal('Dieciocho')
    expect(converter.translate(19)).equal('Diecinueve')
    expect(converter.translate(20)).equal('Veinte')
    expect(converter.translate(21)).equal('Veintiuno')
    expect(converter.translate(22)).equal('Veintidós')
    expect(converter.translate(23)).equal('Veintitrés')
    expect(converter.translate(24)).equal('Veinticuatro')
    expect(converter.translate(25)).equal('Veinticinco')
    expect(converter.translate(26)).equal('Veintiséis')
    expect(converter.translate(27)).equal('Veintisiete')
    expect(converter.translate(28)).equal('Veintiocho')
    expect(converter.translate(29)).equal('Veintinueve')
  })

  it('Numbers 11 => 29 using suffix', () => {
    expect(converter.translate(11, { suffix: { plural: 'cascos', singular: 'casco' } })).equal('Once cascos')
    expect(converter.translate(12, { suffix: { plural: 'cascos', singular: 'casco' } })).equal('Doce cascos')
    expect(converter.translate(13, { suffix: { plural: 'cascos', singular: 'casco' } })).equal('Trece cascos')
    expect(converter.translate(14, { suffix: { plural: 'cascos', singular: 'casco' } })).equal('Catorce cascos')
    expect(converter.translate(15, { suffix: { plural: 'cascos', singular: 'casco' } })).equal('Quince cascos')
    expect(converter.translate(16, { suffix: { plural: 'cascos', singular: 'casco' } })).equal('Dieciséis cascos')
    expect(converter.translate(17, { suffix: { plural: 'cascos', singular: 'casco' } })).equal('Diecisiete cascos')
    expect(converter.translate(18, { suffix: { plural: 'cascos', singular: 'casco' } })).equal('Dieciocho cascos')
    expect(converter.translate(19, { suffix: { plural: 'cascos', singular: 'casco' } })).equal('Diecinueve cascos')
    expect(converter.translate(20, { suffix: { plural: 'cascos', singular: 'casco' } })).equal('Veinte cascos')
    expect(converter.translate(21, { suffix: { plural: 'cascos', singular: 'casco' } })).equal('Veintiún cascos')
    expect(converter.translate(22, { suffix: { plural: 'cascos', singular: 'casco' } })).equal('Veintidós cascos')
    expect(converter.translate(23, { suffix: { plural: 'cascos', singular: 'casco' } })).equal('Veintitrés cascos')
    expect(converter.translate(24, { suffix: { plural: 'cascos', singular: 'casco' } })).equal('Veinticuatro cascos')
    expect(converter.translate(25, { suffix: { plural: 'cascos', singular: 'casco' } })).equal('Veinticinco cascos')
    expect(converter.translate(26, { suffix: { plural: 'cascos', singular: 'casco' } })).equal('Veintiséis cascos')
    expect(converter.translate(27, { suffix: { plural: 'cascos', singular: 'casco' } })).equal('Veintisiete cascos')
    expect(converter.translate(28, { suffix: { plural: 'cascos', singular: 'casco' } })).equal('Veintiocho cascos')
    expect(converter.translate(29, { suffix: { plural: 'cascos', singular: 'casco' } })).equal('Veintinueve cascos')
  })

  it('Numbers 11 => 29 con sufijo femenino', () => {
    expect(converter.translate(13, { suffix: { plural: 'peras', singular: 'pera' }, gender: GENDER_STYLE_FEMININE })).equal('Trece peras')
    expect(converter.translate(14, { suffix: { plural: 'peras', singular: 'pera' }, gender: GENDER_STYLE_FEMININE })).equal('Catorce peras')
    expect(converter.translate(15, { suffix: { plural: 'peras', singular: 'pera' }, gender: GENDER_STYLE_FEMININE })).equal('Quince peras')
    expect(converter.translate(16, { suffix: { plural: 'peras', singular: 'pera' }, gender: GENDER_STYLE_FEMININE })).equal('Dieciséis peras')
    expect(converter.translate(20, { suffix: { plural: 'peras', singular: 'pera' }, gender: GENDER_STYLE_FEMININE })).equal('Veinte peras')
    expect(converter.translate(21, { suffix: { plural: 'peras', singular: 'pera' }, gender: GENDER_STYLE_FEMININE })).equal('Veintiuna peras')
  })

  it('*nty numbers round', () => {
    expect(converter.translate(20)).equal('Veinte')
    expect(converter.translate(30)).equal('Treinta')
    expect(converter.translate(40)).equal('Cuarenta')
    expect(converter.translate(50)).equal('Cincuenta')
    expect(converter.translate(60)).equal('Sesenta')
    expect(converter.translate(70)).equal('Setenta')
    expect(converter.translate(80)).equal('Ochenta')
    expect(converter.translate(90)).equal('Noventa')
  })

  it('nty numbers with units', () => {
    expect(converter.translate(37)).equal('Treinta y siete')
    expect(converter.translate(46)).equal('Cuarenta y seis')
    expect(converter.translate(44)).equal('Cuarenta y cuatro')
    expect(converter.translate(51)).equal('Cincuenta y uno')
    expect(converter.translate(61)).equal('Sesenta y uno')
    expect(converter.translate(79)).equal('Setenta y nueve')
    expect(converter.translate(88)).equal('Ochenta y ocho')
    expect(converter.translate(93)).equal('Noventa y tres')
  })

  it('Hundreded numbers', () => {
    expect(converter.translate(151)).equal('Ciento cincuenta y uno')
    expect(converter.translate(221)).equal('Doscientos veintiuno')
    expect(converter.translate(346)).equal('Trescientos cuarenta y seis')
    expect(converter.translate(444)).equal('Cuatrocientos cuarenta y cuatro')
    expect(converter.translate(511)).equal('Quinientos once')
    expect(converter.translate(601)).equal('Seiscientos uno')
    expect(converter.translate(700)).equal('Setecientos')
    expect(converter.translate(899)).equal('Ochocientos noventa y nueve')
    expect(converter.translate(923)).equal('Novecientos veintitrés')
  })

  it('Hundred numbers', () => {
    expect(converter.translate(100)).equal('Cien')
    expect(converter.translate(200)).equal('Doscientos')
    expect(converter.translate(300)).equal('Trescientos')
    expect(converter.translate(400)).equal('Cuatrocientos')
    expect(converter.translate(500)).equal('Quinientos')
    expect(converter.translate(600)).equal('Seiscientos')
    expect(converter.translate(700)).equal('Setecientos')
    expect(converter.translate(800)).equal('Ochocientos')
    expect(converter.translate(900)).equal('Novecientos')
  })

  it('Thousand numbers rounded', () => {
    expect(converter.translate(1000)).equal('Mil')
    expect(converter.translate(2000)).equal('Dos mil')
    expect(converter.translate(3000)).equal('Tres mil')
    expect(converter.translate(4000)).equal('Cuatro mil')
    expect(converter.translate(5000)).equal('Cinco mil')
    expect(converter.translate(6000)).equal('Seis mil')
    expect(converter.translate(7000)).equal('Siete mil')
    expect(converter.translate(8000)).equal('Ocho mil')
    expect(converter.translate(9000)).equal('Nueve mil')
  })

  it('Thousand numbers', () => {
    expect(converter.translate(2345)).equal('Dos mil trescientos cuarenta y cinco')
    expect(converter.translate(345016)).equal('Trescientos cuarenta y cinco mil dieciséis')
    expect(converter.translate(1001)).equal('Mil uno')
    expect(converter.translate(1321)).equal('Mil trescientos veintiuno', '1.321')
    expect(converter.translate(3011)).equal('Tres mil once')
    expect(converter.translate(999100)).equal('Novecientos noventa y nueve mil cien')
  })

  it('Millions rounded', () => {
    expect(converter.translate(1000000)).equal('Un millón')
    expect(converter.translate(2000000)).equal('Dos millones')
    expect(converter.translate(9000000)).equal('Nueve millones')
  })

  it('Millions rounded', () => {
    expect(converter.translate(154821)).equal('Ciento cincuenta y cuatro mil ochocientos veintiuno')
    expect(converter.translate(154821, { suffix: { plural: 'pesos', singular: 'peso' } }))
      .equal('Ciento cincuenta y cuatro mil ochocientos veintiún pesos')
    expect(converter.translate(154821, { suffix: { plural: 'personas', singular: 'persona' }, gender: GENDER_STYLE_FEMININE }))
      .equal('Ciento cincuenta y cuatro mil ochocientas veintiuna personas')
    expect(converter.translate(181154821, { suffix: { plural: 'personas', singular: 'persona' }, gender: GENDER_STYLE_FEMININE }))
      .equal('Ciento ochenta y un millones ciento cincuenta y cuatro mil ochocientas veintiuna personas')
    expect(converter.translate(181154821, { suffix: { plural: 'pesos', singular: 'peso' }, gender: 'M' }))
      .equal('Ciento ochenta y un millones ciento cincuenta y cuatro mil ochocientos veintiún pesos')
  })

  it('Others numbers special cases', () => {
    expect(converter.translate(1294)).equal('Mil doscientos noventa y cuatro', '1294')
    expect(converter.translate(1001, { suffix: { plural: 'pesos', singular: 'peso' } }), '1001')
      .equal('Mil un pesos', 'con sufijo terminación \'un\'')
    expect(converter.translate(1001)).equal('Mil uno', '1001')
    expect(converter.translate(116000)).equal('Ciento dieciséis mil', '116000')
    expect(converter.translate(935978)).equal('Novecientos treinta y cinco mil novecientos setenta y ocho', '935.978')
    expect(converter.translate(31511003)).equal('Treinta y un millones quinientos once mil tres', '31.511.003')

    expect(converter.translate(1236721, { suffix: { plural: 'pesos', singular: 'peso' } }))
      .equal('Un millón doscientos treinta y seis mil setecientos veintiún pesos')
    expect(converter.translate(423, { suffix: { plural: 'pesos', singular: 'peso' } }))
      .equal('Cuatrocientos veintitrés pesos')
    expect(converter.translate(423)).equal('Cuatrocientos veintitrés')

    expect(converter.translate(1236721)).equal('Un millón doscientos treinta y seis mil setecientos veintiuno')
    expect(converter.translate(999999999))
      .equal('Novecientos noventa y nueve millones novecientos noventa y nueve mil novecientos noventa y nueve')

    expect(converter.translate(BILLION - 1))
      .equal(
        'Novecientos noventa y nueve mil novecientos noventa y nueve millones novecientos noventa y nueve mil novecientos noventa y nueve',
        'BILLON - 1')

    expect(converter.translate(FIRST_VALUE_UNSUPPORTED - 1))
      .equal(
        'Nueve mil novecientos noventa y nueve billones ' +
        'novecientos noventa y nueve mil novecientos noventa y nueve millones ' +
        'novecientos noventa y nueve mil novecientos ochenta y ocho',
        (FIRST_VALUE_UNSUPPORTED - 1).toLocaleString('es-CL'))

    expect(converter.translate(2837344, { case: CASE_STYLE_UPPER, suffix: { plural: 'PESOS CON CERO CVS M/CTE.' } }))
      .equal('DOS MILLONES OCHOCIENTOS TREINTA Y SIETE MIL TRESCIENTOS CUARENTA Y CUATRO PESOS CON CERO CVS M/CTE.')
  })

  it('getExp: calculate exp', () => {
    expect(converter.getPartsDivisor(0)).equals(THOUSAND, 'miles') // for: www.www.xxx.xxx.yyy.ZZZ
    expect(converter.getPartsDivisor(1)).equals(MILLION, 'millones') // for: www.www.xxx.xxx.YYY.zzz
    expect(converter.getPartsDivisor(2)).equals(BILLION, 'billones') // for: www.www.XXX.XXXX.yyy.zzz
    expect(converter.getPartsDivisor(3)).equals(TRILLION, 'trillones') // for: WWW.WWW.xxx.xxx.yyy.zzz
    expect(converter.getPartsDivisor(4)).equals(QUADRILLION, 'cuatrillones')
  })


  it('getPortion for billions', () => {
    const num = 3643256789384 // 3.643.256.789.384
    expect(converter.getPortion(num, 0)).equals(384, 'units')
    expect(converter.getPortion(num, 1)).equals(789, 'thousands')
    expect(converter.getPortion(num, 2)).equals(643256, 'millions')
    expect(converter.getPortion(num, 3)).equals(3, 'billions')
  })

  it('getPortion for trillions', () => {
    const num = 56783643256789384 // 3.643.256.789.384
    expect(converter.getPortion(num, 0)).equals(384, 'units')
    expect(converter.getPortion(num, 1)).equals(789, 'thousands')
    expect(converter.getPortion(num, 2)).equals(643256, 'millions')
    expect(converter.getPortion(num, 3)).equals(56783, 'billions')
  })

  it('getParts 999.000.000.000', () => {
    const arr = converter.getParts(999000000000)
    expect(arr.length).equals(3)
    expect(arr[0]).equals(0)
    expect(arr[1]).equals(0)
    expect(arr[2]).equals(999000)
  })




  it('getParts 1.000', () => {
    const arr = converter.getParts(1000)
    expect(arr.length).equals(2)
    expect(arr[0]).equals(0)
    expect(arr[1]).equals(1)
  })

  it('getParts just minor than BILLION', () => {
    const arr = converter.getParts(BILLION - 1)
    expect(arr.length).equals(3)
    expect(arr[0]).equals(999)
    expect(arr[1]).equals(999)
    expect(arr[2]).equals(999999)
  })

  it('getParts millions 456.322.145', () => {
    const arr = converter.getParts(456322145)
    expect(arr.length).equals(3)
    expect(arr[0]).equals(145)
    expect(arr[1]).equals(322)
    expect(arr[2]).equals(456)
  })

  it('getParts millions 1.234.000', () => {
    const arr = converter.getParts(1234000)
    expect(arr.length).equals(3)
    expect(arr[0]).equals(0)
    expect(arr[1]).equals(234)
    expect(arr[2]).equals(1)
  })

  it('getParts thousands 745321', () => {
    const arr = converter.getParts(745321)
    expect(arr.length).equals(2)
    expect(arr[0]).equals(321)
    expect(arr[1]).equals(745)
  })

  it('getParts hundred', () => {
    const arr = converter.getParts(126)
    expect(arr.length).equals(1)
    expect(arr[0]).equals(126)
  })


  it(`getParts MAX_VALUE_ALLOWED: ${FIRST_VALUE_UNSUPPORTED.toLocaleString('es-cl')}`, () => {
    const num = FIRST_VALUE_UNSUPPORTED
    const arr = converter.getParts(num)
    expect(arr.length).equals(4)
    expect(arr[0]).equals(990, 'cent')
    expect(arr[1]).equals(999, 'thousands')
    expect(arr[2]).equals(999999, 'millions')
    expect(arr[3]).equals(9999, 'billions')
  })
})
