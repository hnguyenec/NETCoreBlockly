﻿//if you want to copy those blocks, make sure you replace \` with `
var testBlocks = [

    {
        name: 'Just weather',
        data: `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="^HqtU]3:/R^Xs!?,#:]m">n</variable>
  </variables>
  <block type="variables_set" id="set_n_initial" inline="true" x="20" y="20">
    <field name="VAR" id="^HqtU]3:/R^Xs!?,#:]m">n</field>
    <value name="VALUE">
      <block type="math_number" id="^+AKjl[KXHWUX=n4}L?7">
        <field name="NUM">1</field>
      </block>
    </value>
    <next>
      <block type="text_print" id="xz}Huefk:Dt]#0_C:c1Y">
        <value name="TEXT">
          <shadow type="text" id="xJ*x^7]_RVDjH|+2d~+t">
            <field name="TEXT">abc</field>
          </shadow>
          <block type="WeatherForecast_GET" id="BR+qr5jpf,neGJCluvdG"></block>
        </value>
      </block>
    </next>
  </block>
</xml>`
    },
    {
        name: 'Get items from GET REST call',
        data: `<xml xmlns="https://developers.google.com/blockly/xml">
    <variables>
        <variable id="^HqtU]3:/R^Xs!?,#:]m">n</variable>
        <variable id="^Aegl%=)*Nuw/F?C7ll)">list</variable>
        <variable id="43omA)lH5]@xKx#LjSes">var_Math2Values</variable>
    </variables>
    <block id="set_n_initial" type="variables_set" y="20" x="20" inline="true">
        <field id="^HqtU]3:/R^Xs!?,#:]m" name="VAR">n</field>
        <value name="VALUE">
            <block id="^+AKjl[KXHWUX=n4}L?7" type="math_number">
                <field name="NUM">1</field>
            </block>
        </value>
        <next>
            <block id="c~swCYe|6)jElY;-+,l}" type="variables_set">
                <field id="^Aegl%=)*Nuw/F?C7ll)" name="VAR">list</field>
                <value name="VALUE">
                    <block id="8Iv-:.Ip6r*_2^^BX(mm" type="converttojson">
                        <value name="ValueToConvert">
                            <block id="Lcy-?cJK?g7Xs^mc#Ie," type="api_MathDivideRest_GET"></block>
                        </value>
                    </block>
                </value>
                <next>
                    <block id="[)USsB,B\`qB[NdJ1evx5" type="variables_set">
                        <field id="43omA)lH5]@xKx#LjSes" name="VAR">var_Math2Values</field>
                        <value name="VALUE">
                            <block id="6Nfdpv\`*eib63*oVNBhL" type="lists_getIndex">
                                <mutation at="false" statement="false"></mutation>
                                <field name="MODE">GET</field>
                                <field name="WHERE">FIRST</field>
                                <value name="VALUE">
                                    <block id="i4vKSFy_r~.x=jsS5;cZ" type="variables_get"><field id="^Aegl%=)*Nuw/F?C7ll)" name="VAR">list</field>
                                    </block>
                                </value>
                            </block>
                        </value>
                        <next>
                            <block id="xz}Huefk:Dt]#0_C:c1Y" type="text_print">
                                <value name="TEXT">
                                    <shadow id="xJ*x^7]_RVDjH|+2d~+t" type="text"><field name="TEXT">abc</field>
                                    </shadow>
                                    <block id="xp5mAs-^NzC]tu:]1m0A" type="converttostring"><value name="ValueToConvert"><block id="v{N}]+au@VA]9COZqw{|" type="variables_get"><field id="43omA)lH5]@xKx#LjSes" name="VAR">var_Math2Values</field>
                                            </block>
                                        </value>
                                    </block>
                                </value>
                                <next>
                                    <block id="GvUbg?W^1qmPj;:$P_F\`" type="variables_set">
                                        <field id="43omA)lH5]@xKx#LjSes" name="VAR">var_Math2Values</field>
                                        <value name="VALUE">
                                            <block id="6h5/n5Ec;;6:RIg3l!5h" type="lists_getIndex"><mutation at="false" statement="false"></mutation><field name="MODE">GET</field><field name="WHERE">LAST</field><value name="VALUE"><block id="3yIr7rs9Ps7_zhFiWyn=" type="variables_get"><field id="^Aegl%=)*Nuw/F?C7ll)" name="VAR">list</field>
                                                    </block>
                                                </value>
                                            </block>
                                        </value>
                                        <next>
                                            <block id="?tD+4;B.SN[#=](AU/LE" type="text_print">
                                                <value name="TEXT">
                                                    <shadow type="text"><field name="TEXT">abc</field>
                                                    </shadow>
                                                    <block id="=EQr_hqJ4N2-48j!oUn8" type="converttostring"><value name="ValueToConvert"><block id="Ow[J+$g3\`R8(qhg/Rgj4" type="variables_get"><field id="43omA)lH5]@xKx#LjSes" name="VAR">var_Math2Values</field>
                                                            </block>
                                                        </value>
                                                    </block>
                                                </value>
                                            </block>
                                        </next>
                                    </block>
                                </next>
                            </block>
                        </next>
                    </block>
                </next>
            </block>
        </next>
    </block>
</xml>`
    },
    {
        name: 'Get and Post',
        data:`<xml xmlns="https://developers.google.com/blockly/xml">
    <variables>
        <variable id="^HqtU]3:/R^Xs!?,#:]m">n</variable>
        <variable id="43omA)lH5]@xKx#LjSes">var_Math2Values</variable>
    </variables>
    <block id="set_n_initial" type="variables_set" y="20" x="20" inline="true">
        <field id="^HqtU]3:/R^Xs!?,#:]m" name="VAR">n</field>
        <value name="VALUE">
            <block id="^+AKjl[KXHWUX=n4}L?7" type="math_number">
                <field name="NUM">90</field>
            </block>
        </value>
        <next>
            <block id="nk~N#rsu:5QG!e4gxhme" type="variables_set">
                <field id="43omA)lH5]@xKx#LjSes" name="VAR">var_Math2Values</field>
                <value name="VALUE">
                    <block id="lt7v_nQ5KX0)v-8DF!H]" type="converttojson">
                        <value name="ValueToConvert">
                            <block id="eS?yCGb}./iFL?fB4,~=" type="api_MathDivideRest__id__GET">
                                <value name="val_id">
                                    <shadow id="UcBEM8\`0J-gNi|INftgm" type="math_number"><field name="NUM">10</field>
                                    </shadow>
                                    <block id="~XYK(H)g|koScok3-!a@" type="variables_get"><field id="^HqtU]3:/R^Xs!?,#:]m" name="VAR">n</field>
                                    </block>
                                </value>
                            </block>
                        </value>
                    </block>
                </value>
                <next>
                    <block id="UD*]u%TzE2T[?[w|mYsJ" type="text_print">
                        <value name="TEXT">
                            <shadow id="Cnq%+v{xRUh[zM{n2T-[" type="text">
                                <field name="TEXT">abc</field>
                            </shadow>
                            <block id="rC1jdsCbZT=T?=iyyhC$" type="converttostring">
                                <value name="ValueToConvert">
                                    <block id="I_QjjCFVe%F[SVDSbl;_" type="variables_get"><field id="43omA)lH5]@xKx#LjSes" name="VAR">var_Math2Values</field>
                                    </block>
                                </value>
                            </block>
                        </value>
                        <next>
                            <block id="S*YAhIdY3UIf!lxOIl#|" type="variables_set" inline="true">
                                <field id="^HqtU]3:/R^Xs!?,#:]m" name="VAR">n</field>
                                <value name="VALUE">
                                    <block id="#LQ):*eTN,9ZeyppGw\`$" type="api_MathDivideRest_POST"><value name="val_values"><shadow id="uu8h,,H=];uz$mUZ-:)h" type="TestBlocklyHtml_Math2Values"></shadow><block id="$d;8$Ry*D-=CPj@S-I0?" type="variables_get"><field id="43omA)lH5]@xKx#LjSes" name="VAR">var_Math2Values</field>
                                            </block>
                                        </value>
                                    </block>
                                </value>
                                <next>
                                    <block id="1VW?m?|iKHE$U]1!6RIY" type="text_print">
                                        <value name="TEXT">
                                            <shadow id="|F}]ve!mpnRb*ln;h5IQ" type="text"><field name="TEXT">abc</field>
                                            </shadow>
                                            <block id="7S?u@L/]xoqsU.j!CT.k" type="variables_get"><field id="^HqtU]3:/R^Xs!?,#:]m" name="VAR">n</field>
                                            </block>
                                        </value>
                                    </block>
                                </next>
                            </block>
                        </next>
                    </block>
                </next>
            </block>
        </next>
    </block>
    <block id="t.KZiVh]u/.Iy/xcLkOL" type="math_number" y="191" x="149">
        <field name="NUM">90</field>
    </block>
</xml>`

    },
    {
        name: "Put & POST",
        data:`<xml xmlns="https://developers.google.com/blockly/xml">
    <variables>
        <variable >n</variable>
        <variable >var_Math2Values</variable>
        <variable  type="TestBlocklyHtml_Math2Values">var_Math2Values</variable>
    </variables>
    <block id="set_n_initial" type="variables_set" y="-425" x="-598" inline="true">
        <field  name="VAR">n</field>
        <value name="VALUE">
            <block  type="math_number">
                <field name="NUM">90</field>
            </block>
        </value>
        <next>
            <block type="variables_set">
                <field name="VAR">var_Math2Values</field>
                <value name="VALUE">
                    <block type="TestBlocklyHtml_Math2Values">
                        <value name="val_x">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                            <block type="variables_get">
                                <field name="VAR">n</field>
                            </block>
                        </value>
                        <value name="val_y">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                        </value>
                    </block>
                </value>
                <next>
                    <block type="text_print">
                        <value name="TEXT">
                            <shadow type="text">
                                <field name="TEXT">abc</field>
                            </shadow>
                            <block type="converttostring">
                                <value name="ValueToConvert">
                                    <block type="variables_get"><field name="VAR">var_Math2Values</field>
                                    </block>
                                </value>
                            </block>
                        </value>
                        <next>
                            <block type="variables_set" inline="true">
                                <field name="VAR">n</field>
                                <value name="VALUE">
                                    <block  type="api_MathDivideRest_POST"><value name="val_values"><shadow type="TestBlocklyHtml_Math2Values"></shadow><block type="variables_get"><field name="VAR">var_Math2Values</field>
                                            </block>
                                        </value>
                                    </block>
                                </value>
                                <next>
                                    <block type="text_print">
                                        <value name="TEXT">
                                            <shadow type="text"><field name="TEXT">abc</field>
                                            </shadow>
                                            <block type="variables_get"><field name="VAR">n</field>
                                            </block>
                                        </value>
                                        <next>
                                            <block type="variables_set" inline="true"><field name="VAR" variabletype="TestBlocklyHtml_Math2Values">var_Math2Values</field><value name="VALUE"><block type="api_MathDivideRest__id__PUT"><value name="val_id"><shadow type="math_number"><field name="NUM">10</field>
                                                            </shadow>
                                                        </value>
                                                        <value name="val_values">
                                                            <shadow type="TestBlocklyHtml_Math2Values"></shadow>
                                                            <block type="variables_get"><field name="VAR">var_Math2Values</field>
                                                            </block>
                                                        </value>
                                                    </block>
                                                </value>
                                                <next>
                                                    <block  type="text_print">
                                                        <value name="TEXT">
                                                            <shadow type="text"><field name="TEXT">abc</field>
                                                            </shadow>
                                                            <block type="variables_get"><field name="VAR" variabletype="TestBlocklyHtml_Math2Values">var_Math2Values</field>
                                                            </block>
                                                        </value>
                                                        <next>
                                                            <block type="variables_set" inline="true"><field name="VAR" variabletype="TestBlocklyHtml_Math2Values">var_Math2Values</field><value name="VALUE"><block type="converttojson"><value name="ValueToConvert"><block type="variables_get"><field name="VAR">var_Math2Values</field>
                                                                            </block>
                                                                        </value>
                                                                    </block>
                                                                </value>
                                                                <next>
                                                                    <block type="variables_set" inline="true">
                                                                        <field name="VAR" variabletype="TestBlocklyHtml_Math2Values">var_Math2Values</field>
                                                                        <value name="VALUE">
                                                                            <block type="api_MathDivideRest__id__PUT"><value name="val_id"><shadow type="math_number"><field name="NUM">10</field>
                                                                                    </shadow>
                                                                                </value>
                                                                                <value name="val_values">
                                                                                    <shadow type="TestBlocklyHtml_Math2Values"></shadow>
                                                                                    <block type="variables_get"><field name="VAR">var_Math2Values</field>
                                                                                    </block>
                                                                                </value>
                                                                            </block>
                                                                        </value>
                                                                        <next>
                                                                            <block type="text_print">
                                                                                <value name="TEXT">
                                                                                    <shadow type="text"><field name="TEXT">abc</field>
                                                                                    </shadow>
                                                                                    <block type="variables_get"><field name="VAR" variabletype="TestBlocklyHtml_Math2Values">var_Math2Values</field>
                                                                                    </block>
                                                                                </value>
                                                                            </block>
                                                                        </next>
                                                                    </block>
                                                                </next>
                                                            </block>
                                                        </next>
                                                    </block>
                                                </next>
                                            </block>
                                        </next>
                                    </block>
                                </next>
                            </block>
                        </next>
                    </block>
                </next>
            </block>
        </next>
    </block>
</xml>`
    },
    {
        name: 'Dynamic delete',
        data:`<xml xmlns="https://developers.google.com/blockly/xml">
    <variables>
        <variable id="P{SqEl7dFn[MB{MvR:H:">n</variable>
    </variables>
    <block type="variables_set" y="-452" x="-732" inline="true">
        <field id="P{SqEl7dFn[MB{MvR:H:" name="VAR">n</field>
        <value name="VALUE">
            <block type="text_prompt_ext">
                <mutation type="TEXT"></mutation>
                <field name="TYPE">TEXT</field>
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT">Please give id to delete</field>
                    </shadow>
                </value>
            </block>
        </value>
        <next>
            <block type="text_print">
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT">Done</field>
                    </shadow>
                    <block type="variables_get">
                        <field id="P{SqEl7dFn[MB{MvR:H:" name="VAR">n</field>
                    </block>
                </value>
                <next>
                    <block type="text_print">
                        <value name="TEXT">
                            <shadow type="text">
                                <field name="TEXT">abc</field>
                            </shadow>
                            <block type="api_MathDivideRest__id__DELETE">
                                <value name="val_id">
                                    <shadow type="math_number"><field name="NUM">10</field>
                                    </shadow>
                                    <block type="variables_get"><field id="P{SqEl7dFn[MB{MvR:H:" name="VAR">n</field>
                                    </block>
                                </value>
                            </block>
                        </value>
                        <next>
                            <block type="text_print">
                                <value name="TEXT">
                                    <shadow type="text"><field name="TEXT">Done</field>
                                    </shadow>
                                    <block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="text"><field name="TEXT">Done the delete with</field>
                                            </block>
                                        </value>
                                        <value name="ADD1">
                                            <block type="variables_get"><field id="P{SqEl7dFn[MB{MvR:H:" name="VAR">n</field>
                                            </block>
                                        </value>
                                    </block>
                                </value>
                            </block>
                        </next>
                    </block>
                </next>
            </block>
        </next>
    </block>
</xml>`
    }
]