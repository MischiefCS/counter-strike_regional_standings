### Roster Details<br />
Team Name: Bromo<br />
Roster: Biuckmt, FIOURN, NARONE, S1kura, Zy88<br />
Global Rank: [155](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [16]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  752.4<br />
<br />
Final Rank Value (752.4) = Starting Rank Value (723.1) + Head To Head Adjustments (29.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.359[<sup>1</sup>](#table2)
- Bounty Collected: 0.258[<sup>2</sup>](#table1)
- Opponent Network: 0.038[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.164<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 723.1
- 400 + ( ( 0.164 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 723.1


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
|           11 |      850 | 2025-01-01 | Unsettled Resentment    | W   | 0.810      | 0.338        | 0.014 (0.004)    | 0.313 (0.086)    | 0 (0.000) |    12.90 | Biuckmt, FIOURN, NARONE, S1kura, Zy88 |
|           10 |      851 | 2025-01-01 | E9 Esports              | W   | 0.809      | 0.338        | 0.000 (0.000)    | 0.041 (0.011)    | 0 (0.000) |     6.05 | Biuckmt, FIOURN, NARONE, S1kura, Zy88 |
|            9 |      854 | 2024-12-31 | DogEvil                 | W   | 0.804      | 0.338        | 0.024 (0.006)    | 0.625 (0.170)    | 0 (0.000) |    15.95 | Biuckmt, FIOURN, NARONE, S1kura, Zy88 |
|            8 |      860 | 2024-12-30 | E9 Esports              | L   | 0.796      | -            | -                | -                | -         |   -19.04 | Biuckmt, FIOURN, NARONE, S1kura, Zy88 |
|            7 |      931 | 2024-12-28 | DogEvil                 | L   | 0.778      | -            | -                | -                | -         |    -9.84 | Biuckmt, FIOURN, NARONE, S1kura, Zy88 |
|            6 |      961 | 2024-12-27 | Unsettled Resentment    | L   | 0.771      | -            | -                | -                | -         |   -12.50 | Biuckmt, FIOURN, NARONE, S1kura, Zy88 |
|            5 |     1941 | 2024-12-02 | Nomads (Mongolian team) | W   | 0.605      | 0.143        | 0.000 (0.000)    | 0.190 (0.016)    | 0 (0.000) |     4.15 | Biuckmt, FIOURN, NARONE, S1kura, Zy88 |
|            4 |     1945 | 2024-12-02 | The Huns Esports        | W   | 0.605      | 0.143        | 0.025 (0.002)    | 0.612 (0.053)    | 0 (0.000) |    12.76 | Biuckmt, FIOURN, NARONE, S1kura, Zy88 |
|            3 |     1948 | 2024-12-02 | SUBUTAI                 | W   | 0.604      | 0.143        | 0.001 (0.000)    | 0.063 (0.005)    | 0 (0.000) |     4.14 | Biuckmt, FIOURN, NARONE, S1kura, Zy88 |
|            2 |     1956 | 2024-12-02 | Eruption                | W   | 0.604      | 0.143        | 0.014 (0.001)    | 0.492 (0.042)    | 0 (0.000) |    12.19 | Biuckmt, FIOURN, NARONE, S1kura, Zy88 |
|            1 |     1960 | 2024-12-01 | Aogiri                  | W   | 0.604      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.54 | Biuckmt, FIOURN, NARONE, S1kura, Zy88 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,549.70)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-01-01 |      0.810 | $6,849.13      | $5,549.70       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
