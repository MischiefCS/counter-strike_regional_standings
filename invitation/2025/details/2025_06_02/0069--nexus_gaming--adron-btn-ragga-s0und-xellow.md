### Roster Details<br />
Team Name: Nexus Gaming<br />
Roster: ADRON, BTN, ragga, s0und, XELLOW<br />
Global Rank: [69](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [47]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  702.1<br />
<br />
Final Rank Value (702.1) = Starting Rank Value (731.3) + Head To Head Adjustments (-29.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.362[<sup>1</sup>](#table2)
- Bounty Collected: 0.171[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.022[<sup>2</sup>](#table1)

The average of these factors is 0.143<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 731.3
- 400 + ( ( 0.143 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 731.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      163 | 2025-02-20 | BC.Game Esports        | L   | 0.516      | -            | -                | -                | -         |    -2.85 | ADRON, BTN, ragga, s0und, XELLOW     |
|           11 |      279 | 2025-02-14 | Partizan Esports       | L   | 0.476      | -            | -                | -                | -         |    -4.88 | ADRON, BTN, ragga, s0und, XELLOW     |
|           10 |      295 | 2025-02-13 | Fire Flux Esports      | W   | 0.470      | 0.435        | 0.001 (0.000)    | 0.784 (0.160)    | 0 (0.000) |     8.29 | ADRON, BTN, ragga, s0und, XELLOW     |
|            9 |      358 | 2025-02-10 | Hesta                  | L   | 0.452      | -            | -                | -                | -         |   -10.08 | ADRON, BTN, ragga, s0und, XELLOW     |
|            8 |      369 | 2025-02-10 | Metizport              | L   | 0.450      | -            | -                | -                | -         |    -7.33 | ADRON, BTN, ragga, s0und, XELLOW     |
|            7 |      554 | 2025-02-05 | Dynamo Eclot           | L   | 0.417      | -            | -                | -                | -         |    -5.48 | ADRON, BTN, ragga, s0und, XELLOW     |
|            6 |      563 | 2025-02-05 | 9INE                   | L   | 0.416      | -            | -                | -                | -         |    -5.59 | ADRON, BTN, ragga, s0und, XELLOW     |
|            5 |      769 | 2024-12-22 | Betclic Apogee Esports | L   | 0.117      | -            | -                | -                | -         |    -1.71 | ADRON, BTN, Ciocardau, XELLOW, zewts |
|            4 |      813 | 2024-12-18 | Insilio                | W   | 0.091      | 0.354        | 0.000 (0.000)    | 0.173 (0.006)    | 0 (0.000) |     0.65 | ADRON, BTN, Ciocardau, ragga, XELLOW |
|            3 |      816 | 2024-12-18 | Illuminar Gaming       | W   | 0.091      | 0.354        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     0.39 | ADRON, BTN, Ciocardau, ragga, XELLOW |
|            2 |      848 | 2024-12-15 | Aimclub                | L   | 0.071      | -            | -                | -                | -         |    -1.14 | ADRON, BTN, Ciocardau, ragga, XELLOW |
|            1 |      876 | 2024-12-14 | Perfect Storm          | W   | 0.064      | 0.143        | 0.003 (0.000)    | 0.000 (0.000)    | 1 (0.064) |     0.57 | ADRON, BTN, Ciocardau, ragga, XELLOW |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,528.44)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-15 |      0.485 | $2,000.00      | $970.37         |
| 2024-12-15 |      0.071 | $7,878.57      | $558.07         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
