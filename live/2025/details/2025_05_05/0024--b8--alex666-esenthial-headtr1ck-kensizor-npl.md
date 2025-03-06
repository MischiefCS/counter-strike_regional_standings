### Roster Details<br />
Team Name: B8<br />
Roster: alex666, esenthial, headtr1ck, kensizor, npl<br />
Global Rank: [24](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [18]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  998.5<br />
<br />
Final Rank Value (998.5) = Starting Rank Value (965.1) + Head To Head Adjustments (33.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.555[<sup>1</sup>](#table2)
- Bounty Collected: 0.327[<sup>2</sup>](#table1)
- Opponent Network: 0.155[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.259<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 965.1
- 400 + ( ( 0.259 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 965.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |       82 | 2025-02-23 | BC.Game Esports    | W   | 0.725      | 0.435        | 0.059 (0.019)    | 1.000 (0.315)    | 0 (0.000) |    12.12 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           17 |      100 | 2025-02-23 | 9Pandas            | W   | 0.723      | 0.435        | 0.071 (0.022)    | 0.281 (0.088)    | 0 (0.000) |     8.33 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           16 |      114 | 2025-02-22 | CYBERSHOKE Esports | W   | 0.718      | 0.435        | 0.014 (0.004)    | 1.000 (0.312)    | 0 (0.000) |     7.41 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           15 |      155 | 2025-02-20 | Monte              | W   | 0.705      | 0.435        | 0.015 (0.005)    | 0.408 (0.125)    | 0 (0.000) |     6.37 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           14 |      247 | 2025-02-15 | 500                | L   | 0.670      | -            | -                | -                | -         |    -9.65 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           13 |      269 | 2025-02-14 | Nemiga Gaming      | W   | 0.664      | 0.435        | 0.012 (0.004)    | 0.220 (0.064)    | 0 (0.000) |     4.62 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           12 |      314 | 2025-02-12 | GUN5 Esports       | W   | 0.650      | 0.435        | 0.103 (0.029)    | 0.288 (0.081)    | 0 (0.000) |     7.71 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           11 |      505 | 2025-02-07 | PARIVISION         | L   | 0.616      | -            | -                | -                | -         |   -16.87 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           10 |      516 | 2025-02-06 | Alliance           | W   | 0.611      | 0.435        | 0.006 (0.001)    | 0.572 (0.152)    | 0 (0.000) |     4.77 | alex666, esenthial, headtr1ck, kensizor, npl     |
|            9 |      552 | 2025-02-05 | PARIVISION         | W   | 0.604      | 0.143        | -                | 0.748 (0.064)    | 0 (0.000) |     2.31 | alex666, esenthial, headtr1ck, kensizor, npl     |
|            8 |      566 | 2025-02-05 | Nemiga Gaming      | W   | 0.603      | 0.143        | 0.012 (0.001)    | -                | 0 (0.000) |     4.18 | alex666, esenthial, headtr1ck, kensizor, npl     |
|            7 |      571 | 2025-02-04 | Fire Flux Esports  | W   | 0.599      | 0.435        | 0.006 (0.002)    | 0.866 (0.225)    | 0 (0.000) |     5.46 | alex666, esenthial, headtr1ck, kensizor, npl     |
|            6 |      605 | 2025-02-02 | Sashi Esport       | W   | 0.583      | 0.435        | 0.003 (0.001)    | 0.498 (0.126)    | -         |     5.63 | alex666, esenthial, headtr1ck, kensizor, npl     |
|            5 |      676 | 2025-01-17 | G2 Esports         | L   | 0.479      | -            | -                | -                | -         |    -1.19 | alex666, esenthial, headtr1ck, kensizor, npl     |
|            4 |      919 | 2024-12-12 | ECSTATIC           | L   | 0.236      | -            | -                | -                | -         |    -5.27 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            3 |     1319 | 2024-11-22 | Astralis           | L   | 0.103      | -            | -                | -                | -         |    -0.01 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            2 |     1340 | 2024-11-21 | Aurora Gaming      | L   | 0.096      | -            | -                | -                | -         |    -2.51 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            1 |     1356 | 2024-11-20 | Team Spirit        | L   | 0.094      | -            | -                | -                | -         |    -0.01 | alex666, cptkurtka023, esenthial, headtr1ck, npl |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($19,305.19)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.725 | $22,000.00     | $15,945.93      |
| 2025-02-15 |      0.672 | $5,000.00      | $3,359.26       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
