### Roster Details<br />
Team Name: Bromo<br />
Roster: Biuckmt, FIOURN, NARONE, S1kura, Zy88<br />
Global Rank: [132](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [16]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  750.7<br />
<br />
Final Rank Value (750.7) = Starting Rank Value (709.5) + Head To Head Adjustments (41.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.359[<sup>1</sup>](#table2)
- Bounty Collected: 0.243[<sup>2</sup>](#table1)
- Opponent Network: 0.031[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.158<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 709.5
- 400 + ( ( 0.158 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 709.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |     1066 | 2025-01-01 | Unsettled Resentment    | W   | 0.810      | 0.143        | 0.014 (0.002)    | 0.354 (0.041)    | 0 (0.000) |    15.46 | Biuckmt, FIOURN, NARONE, S1kura, Zy88 |
|           10 |     1067 | 2025-01-01 | E9 Esports              | W   | 0.809      | 0.143        | 0.000 (0.000)    | 0.044 (0.005)    | 0 (0.000) |     5.91 | Biuckmt, FIOURN, NARONE, S1kura, Zy88 |
|            9 |     1070 | 2024-12-31 | DogEvil                 | W   | 0.804      | 0.143        | 0.024 (0.003)    | 1.000 (0.115)    | 0 (0.000) |    16.79 | Biuckmt, FIOURN, NARONE, S1kura, Zy88 |
|            8 |     1076 | 2024-12-30 | E9 Esports              | L   | 0.796      | -            | -                | -                | -         |   -19.21 | Biuckmt, FIOURN, NARONE, S1kura, Zy88 |
|            7 |     1140 | 2024-12-28 | DogEvil                 | L   | 0.778      | -            | -                | -                | -         |    -9.04 | Biuckmt, FIOURN, NARONE, S1kura, Zy88 |
|            6 |     1167 | 2024-12-27 | Unsettled Resentment    | L   | 0.771      | -            | -                | -                | -         |    -9.67 | Biuckmt, FIOURN, NARONE, S1kura, Zy88 |
|            5 |     1996 | 2024-12-02 | Nomads (Mongolian team) | W   | 0.605      | 0.143        | 0.000 (0.000)    | 0.430 (0.037)    | 0 (0.000) |     4.29 | Biuckmt, FIOURN, NARONE, S1kura, Zy88 |
|            4 |     2000 | 2024-12-02 | The Huns Esports        | W   | 0.605      | 0.143        | 0.025 (0.002)    | 0.597 (0.052)    | 0 (0.000) |    15.10 | Biuckmt, FIOURN, NARONE, S1kura, Zy88 |
|            3 |     2003 | 2024-12-02 | SUBUTAI                 | W   | 0.604      | 0.143        | 0.001 (0.000)    | 0.061 (0.005)    | 0 (0.000) |     4.40 | Biuckmt, FIOURN, NARONE, S1kura, Zy88 |
|            2 |     2011 | 2024-12-02 | Eruption                | W   | 0.604      | 0.143        | 0.014 (0.001)    | 0.658 (0.057)    | 0 (0.000) |    14.45 | Biuckmt, FIOURN, NARONE, S1kura, Zy88 |
|            1 |     2015 | 2024-12-01 | Aogiri                  | W   | 0.604      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.71 | Biuckmt, FIOURN, NARONE, S1kura, Zy88 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,549.70)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-01-01 |      0.810 | $6,849.13      | $5,549.70       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
