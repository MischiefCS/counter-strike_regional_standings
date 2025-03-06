### Roster Details<br />
Team Name: FURIA Esports Female<br />
Roster: bizinha, gabs, izaa, kaahSENSEI, lulitenz<br />
Global Rank: [42](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [10]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  903.3<br />
<br />
Final Rank Value (903.3) = Starting Rank Value (912.5) + Head To Head Adjustments (-9.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.434[<sup>1</sup>](#table2)
- Bounty Collected: 0.260[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.293[<sup>2</sup>](#table1)

The average of these factors is 0.248<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 912.5
- 400 + ( ( 0.248 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 912.5


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
|           11 |      164 | 2025-02-19 | Players (Brazilian team) | L   | 0.887      | -            | -                | -                | -         |   -20.35 | bizinha, gabs, izaa, kaahSENSEI, lulitenz |
|           10 |     1127 | 2024-12-01 | Imperial Female          | W   | 0.353      | 0.143        | 0.134 (0.007)    | 0.132 (0.007)    | 1 (0.353) |     6.46 | bizinha, gabs, izaa, kaahSENSEI, lulitenz |
|            9 |     1129 | 2024-12-01 | Fluxo Demons             | W   | 0.352      | 0.143        | 0.012 (0.001)    | 0.051 (0.003)    | 1 (0.352) |     2.86 | bizinha, gabs, izaa, kaahSENSEI, lulitenz |
|            8 |     1147 | 2024-11-30 | Imperial Female          | L   | 0.346      | -            | -                | -                | -         |    -4.60 | bizinha, gabs, izaa, kaahSENSEI, lulitenz |
|            7 |     1158 | 2024-11-30 | Fluxo Demons             | W   | 0.344      | 0.143        | 0.012 (0.001)    | 0.051 (0.003)    | 1 (0.344) |     2.76 | bizinha, gabs, izaa, kaahSENSEI, lulitenz |
|            6 |     1256 | 2024-11-24 | Imperial Female          | L   | 0.304      | -            | -                | -                | -         |    -4.13 | bizinha, gabs, izaa, kaahSENSEI, lulitenz |
|            5 |     1260 | 2024-11-24 | Eco Warriors             | W   | 0.303      | 0.524        | 0.018 (0.003)    | 0.121 (0.019)    | 1 (0.303) |     2.85 | bizinha, gabs, izaa, kaahSENSEI, lulitenz |
|            4 |     1305 | 2024-11-22 | BIG EQUIPA               | W   | 0.291      | 0.524        | 0.018 (0.003)    | 0.029 (0.004)    | 1 (0.291) |     2.61 | bizinha, gabs, izaa, kaahSENSEI, lulitenz |
|            3 |     1311 | 2024-11-22 | K27 Female               | W   | 0.291      | 0.524        | 0.005 (0.001)    | 0.010 (0.002)    | 1 (0.291) |     1.75 | bizinha, gabs, izaa, kaahSENSEI, lulitenz |
|            2 |     1880 | 2024-10-18 | Fluxo Demons             | W   | 0.059      | 0.323        | 0.012 (0.000)    | 0.051 (0.001)    | 0 (0.000) |     0.49 | bizinha, gabs, izaa, kaahSENSEI, lulitenz |
|            1 |     1981 | 2024-10-12 | Fluxo Demons             | W   | 0.018      | 0.143        | 0.012 (0.000)    | 0.051 (0.000)    | 1 (0.018) |     0.15 | bizinha, gabs, izaa, kaahSENSEI, lulitenz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,212.04)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-01 |      0.353 | $10,042.93     | $3,541.53       |
| 2024-11-24 |      0.304 | $25,000.00     | $7,607.64       |
| 2024-10-12 |      0.018 | $3,564.23      | $62.87          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
