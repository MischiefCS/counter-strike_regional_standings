### Roster Details<br />
Team Name: FURIA Esports Female<br />
Roster: bizinha, gabs, izaa, kaahSENSEI, lulitenz<br />
Global Rank: [49](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [11]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  836.5<br />
<br />
Final Rank Value (836.5) = Starting Rank Value (845.5) + Head To Head Adjustments (-9.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.413[<sup>1</sup>](#table2)
- Bounty Collected: 0.234[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.170[<sup>2</sup>](#table1)

The average of these factors is 0.204<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 845.5
- 400 + ( ( 0.204 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 845.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                 | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |      164 | 2025-02-19 | Players (Brazilian team) | L   | 0.700      | -            | -                | -                | -         |   -14.55 | bizinha, gabs, izaa, kaahSENSEI, lulitenz |
|            8 |     1127 | 2024-12-01 | Imperial Female          | W   | 0.166      | 0.143        | 0.141 (0.003)    | 0.070 (0.002)    | 1 (0.166) |     3.09 | bizinha, gabs, izaa, kaahSENSEI, lulitenz |
|            7 |     1129 | 2024-12-01 | Fluxo Demons             | W   | 0.165      | 0.143        | 0.009 (0.000)    | 0.029 (0.001)    | 1 (0.165) |     1.61 | bizinha, gabs, izaa, kaahSENSEI, lulitenz |
|            6 |     1147 | 2024-11-30 | Imperial Female          | L   | 0.159      | -            | -                | -                | -         |    -2.06 | bizinha, gabs, izaa, kaahSENSEI, lulitenz |
|            5 |     1158 | 2024-11-30 | Fluxo Demons             | W   | 0.158      | 0.143        | 0.009 (0.000)    | 0.029 (0.001)    | 1 (0.158) |     1.54 | bizinha, gabs, izaa, kaahSENSEI, lulitenz |
|            4 |     1256 | 2024-11-24 | Imperial Female          | L   | 0.118      | -            | -                | -                | -         |    -1.53 | bizinha, gabs, izaa, kaahSENSEI, lulitenz |
|            3 |     1260 | 2024-11-24 | Eco Warriors             | W   | 0.117      | 0.524        | 0.013 (0.001)    | 0.089 (0.005)    | 1 (0.117) |     1.26 | bizinha, gabs, izaa, kaahSENSEI, lulitenz |
|            2 |     1305 | 2024-11-22 | BIG EQUIPA               | W   | 0.105      | 0.524        | 0.013 (0.001)    | 0.012 (0.001)    | 1 (0.105) |     1.09 | bizinha, gabs, izaa, kaahSENSEI, lulitenz |
|            1 |     1311 | 2024-11-22 | K27 Female               | W   | 0.104      | 0.524        | 0.004 (0.000)    | 0.000 (0.000)    | 1 (0.104) |     0.55 | bizinha, gabs, izaa, kaahSENSEI, lulitenz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,607.82)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-01 |      0.166 | $10,042.93     | $1,666.85       |
| 2024-11-24 |      0.118 | $25,000.00     | $2,940.97       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
